import React from "react";

interface BusinessComponentProps {
  imageRight?: string;
  imageLeft?: string;
  title: string;
  subTitle?: string;
  description: string;
  description1?: string;
  subDescription?: string;
  buttonText?: string;
}

const BusinessComponent = ({
  imageRight,
  imageLeft,
  title,
  subTitle,
  description,
  description1,
  subDescription,
}: BusinessComponentProps) => {
  return (
    <div
      className={`flex ${
        imageRight ? "flex-col-reverse" : "flex-col"
      } sm:flex-row pl-2 items-center justify-center pt-4 pb-4`}
    >
      {imageLeft && (
        <div className="flex-1 m-4">
          <div className="w-full h-auto">
            <img
              src={imageLeft as string}
              alt={title}
              // layout="responsive"
              width={300}
              height={200}
            />
          </div>
        </div>
      )}

      <div className="flex-1 flex flex-col p-4 ">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">{title}</h1>
        <p className=" mt-2 mb-2 md:text-lg lg:text-xl ">{subTitle}</p>
        <p className=" mb-4   lg:text-lg">{description}</p>
        <p className=" mb-2   lg:text-lg">{description1}</p>
        <p className=" mt-4   lg:text-lg">{subDescription}</p>
      </div>

      {imageLeft ? null : (
        <div className="flex-1 m-4">
          {imageRight && (
            <div className="w-full h-auto">
              <img
                src={imageRight}
                alt={title}
                // layout="responsive"
                width={300}
                height={200}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BusinessComponent;
