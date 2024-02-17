"use client";

import { dataUrl, debounce, download, getImageSize } from "@/lib/utils";
import { CldImage, getCldImageUrl } from "next-cloudinary";
import { PlaceholderValue } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

const GeneratedImage = ({
  image,
  title,
  isTransforming,
  hasDownload = false,
}: GeneratedImageProps) => {
  const downloadHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    download(
      getCldImageUrl({
        width: image?.width,
        height: image?.height,
        src: image?.publicId,
      }),
      title
    );
  };

  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="flex-between">
        <h3 className="h3-bold text-text-secondary">Generated Image</h3>

        {hasDownload && (
          <button className="download-btn" onClick={downloadHandler}>
            <Image
              src="/assets/icons/download.svg"
              alt="Download"
              width={24}
              height={24}
              className="pb-[6px]"
            />
          </button>
        )}
      </div>

      <div className="relative w-[350px] h-[350px] ">
        {image?.publicId && !isTransforming ? (
          <Image
            width={image.width}
            height={image.height}
            src={image?.publicId}
            alt={image.title}
            placeholder={dataUrl as PlaceholderValue}
            className="transformed-image"
          />
        ) : (
          <>
            <div className="transformed-placeholder">
              {isTransforming ? (
                <div className="transforming-loader">
                  <Image
                    src="/assets/icons/spinner.svg"
                    width={50}
                    height={50}
                    alt="spinner"
                  />
                  <p className="text-white/80">Please wait...</p>
                </div>
              ) : (
                "Transformed Image"
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default GeneratedImage;
