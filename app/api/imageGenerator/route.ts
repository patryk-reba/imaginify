import { NextApiResponse, NextApiRequest } from "next";
import OpenAI from "openai";
export const runtime = "edge";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

type ResponseData = {
  url: string | undefined;
};

export async function POST(req: Request, res: NextApiResponse<ResponseData>) {
  const json = await req.json();
  const { prompt } = json;

  if (!prompt) {
    return new Response("Prompt is required", { status: 400 });
  }

  const response = await openai.images.generate({
    model: "dall-e-2",
    prompt,
    n: 1,
    size: "512x512",
  });
  const image_url = response.data[0].url;

  return new Response(JSON.stringify({ url: image_url }));
}
