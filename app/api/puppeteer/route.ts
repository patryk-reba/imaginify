async function sleep(milliseconds: number) {
  return await new Promise<void>((r, _) => {
    setTimeout(() => {
      r();
    }, milliseconds);
  });
}

async function waitForEvent(
  page: { evaluate: (arg0: (event: any) => Promise<void>, arg1: any) => any },
  event: string
) {
  return page.evaluate((event) => {
    return new Promise<void>((r, _) => {
      document.addEventListener(event, function (e) {
        r();
      });
    });
  }, event);
}
export async function POST(req: Request) {
  const puppeteer = require("puppeteer"); // v20.7.4 or later

  const response = await req.json();
  const prompt = response.prompt;
  const browser = await puppeteer.launch();

  const page = await browser.newPage();
  const timeout = 5000;
  page.setDefaultTimeout(timeout);

  const targetPage = page;
  await targetPage.setViewport({
    width: 1519,
    height: 1074,
  });

  const promises: Promise<any>[] = [];
  const startWaitingForEvents = () => {
    promises.push(targetPage.waitForNavigation());
  };
  startWaitingForEvents();
  await targetPage.goto("https://reba-ai.vercel.app/sign-in");
  await Promise.all(promises);

  await puppeteer.Locator.race([
    targetPage.locator("::-p-aria(Email address or username)"),
    targetPage.locator("#identifier-field"),
    targetPage.locator('::-p-xpath(//*[@id=\\"identifier-field\\"])'),
    targetPage.locator(":scope >>> #identifier-field"),
  ])
    .setTimeout(timeout)
    .click({
      offset: {
        x: 106.7142333984375,
        y: 10.66070556640625,
      },
    });

  await puppeteer.Locator.race([
    targetPage.locator("::-p-aria(Email address or username)"),
    targetPage.locator("#identifier-field"),
    targetPage.locator('::-p-xpath(//*[@id=\\"identifier-field\\"])'),
    targetPage.locator(":scope >>> #identifier-field"),
  ])
    .setTimeout(timeout)
    .fill("insteco@o2.pl");

  await puppeteer.Locator.race([
    targetPage.locator("::-p-aria(CONTINUE)"),
    targetPage.locator("button.cl-formButtonPrimary"),
    targetPage.locator(
      "::-p-xpath(/html/body/main/div/div/div[2]/form/button[2])"
    ),
    targetPage.locator(":scope >>> button.cl-formButtonPrimary"),
  ])
    .setTimeout(timeout)
    .click({
      offset: {
        x: 133.7142333984375,
        y: 9.267822265625,
      },
    });

  await Promise.race([waitForEvent(page, "load"), sleep(2000)]);

  await puppeteer.Locator.race([
    targetPage.locator("::-p-aria(Password)"),
    targetPage.locator("#password-field"),
    targetPage.locator('::-p-xpath(//*[@id=\\"password-field\\"])'),
    targetPage.locator(":scope >>> #password-field"),
  ])
    .setTimeout(timeout)
    .fill("5629734r");

  await puppeteer.Locator.race([
    targetPage.locator("::-p-aria(CONTINUE)"),
    targetPage.locator("button.cl-formButtonPrimary"),
    targetPage.locator(
      "::-p-xpath(/html/body/main/div/div/div[3]/form/button[2])"
    ),
    targetPage.locator(":scope >>> button.cl-formButtonPrimary"),
    targetPage.locator("::-p-text(Continue)"),
  ])
    .setTimeout(timeout)
    .click({
      offset: {
        x: 164.7142333984375,
        y: 27.34820556640625,
      },
    });

  await Promise.race([waitForEvent(page, "load"), sleep(timeout)]);

  await puppeteer.Locator.race([
    targetPage.locator("::-p-aria(logo Generate Image)"),
    targetPage.locator("li:nth-of-type(6) > a"),
    targetPage.locator(
      "::-p-xpath(/html/body/main/aside/div/nav/ul[1]/li[6]/a)"
    ),
    targetPage.locator(":scope >>> li:nth-of-type(6) > a"),
  ])
    .setTimeout(timeout)
    .click({
      offset: {
        x: 104,
        y: 22.312469482421875,
      },
    });

  await puppeteer.Locator.race([
    targetPage.locator("::-p-aria(Image Title)"),
    targetPage.locator("#\\:r1e\\:-form-item"),
    targetPage.locator('::-p-xpath(//*[@id=\\":r1e:-form-item\\"])'),
    targetPage.locator(":scope >>> #\\:r1e\\:-form-item"),
  ])
    .setTimeout(timeout)
    .click({
      offset: {
        x: 182.28570556640625,
        y: 29.616058349609375,
      },
    });

  await puppeteer.Locator.race([
    targetPage.locator("::-p-aria(Image Title)"),
    targetPage.locator("#\\:r1e\\:-form-item"),
    targetPage.locator('::-p-xpath(//*[@id=\\":r1e:-form-item\\"])'),
    targetPage.locator(":scope >>> #\\:r1e\\:-form-item"),
  ])
    .setTimeout(timeout)
    .fill("Puppeteer generated");

  await puppeteer.Locator.race([
    targetPage.locator("::-p-aria(Prompt)"),
    targetPage.locator("#\\:r1f\\:-form-item"),
    targetPage.locator('::-p-xpath(//*[@id=\\":r1f:-form-item\\"])'),
    targetPage.locator(":scope >>> #\\:r1f\\:-form-item"),
  ])
    .setTimeout(timeout)
    .click({
      offset: {
        x: 120.28570556640625,
        y: 30.22320556640625,
      },
    });

  await puppeteer.Locator.race([
    targetPage.locator("::-p-aria(Prompt)"),
    targetPage.locator("#\\:r1f\\:-form-item"),
    targetPage.locator('::-p-xpath(//*[@id=\\":r1f:-form-item\\"])'),
    targetPage.locator(":scope >>> #\\:r1f\\:-form-item"),
  ])
    .setTimeout(timeout)
    .fill(JSON.parse(prompt).prompt);
  console.debug("prompt", prompt);
  await puppeteer.Locator.race([
    targetPage.locator('::-p-aria(Generate Image[role=\\"button\\"])'),
    targetPage.locator("div.root-container button:nth-of-type(1)"),
    targetPage.locator(
      "::-p-xpath(/html/body/main/div[2]/div/section/form/div[4]/button[1])"
    ),
    targetPage.locator(":scope >>> div.root-container button:nth-of-type(1)"),
  ])
    .setTimeout(timeout)
    .click({
      offset: {
        x: 407.28570556640625,
        y: 24.22320556640625,
      },
    });

  await Promise.race([waitForEvent(page, "load"), sleep(12000)]);

  await puppeteer.Locator.race([
    targetPage.locator("::-p-aria(Save Image)"),
    targetPage.locator("button:nth-of-type(2)"),
    targetPage.locator(
      "::-p-xpath(/html/body/main/div[2]/div/section/form/div[4]/button[2])"
    ),
    targetPage.locator(":scope >>> button:nth-of-type(2)"),
    targetPage.locator("::-p-text(Save Image)"),
  ])
    .setTimeout(timeout)
    .click({
      offset: {
        x: 285.28570556640625,
        y: 28.22314453125,
      },
    });
  await browser.close();

  return new Response(JSON.stringify({ result: "image generated!" }));
}
