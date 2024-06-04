import React from "react";
import Testimonial from "./Testimonial";

const TestimonialSection = () => {
  return (
    <div className="justify-center items-center py-10 space-y-10 bg-upticklightb10">
      <div className="container mx-auto flex flex-col space-y-12 items-center justify-center p-4 md:p-10 md:px-24 xl:px-48">
        <h1 className="font-semibold text-5xl text-black">
          Testimonials and Success Stories
        </h1>
      </div>

      <div>
        <Testimonial />
      </div>
      <div className="container mx-auto flex flex-col space-y-12 items-center justify-center p-4 md:p-10 md:px-24 xl:px-48">
        <p className="font-normal text-lg text-black md:w-3/5 text-center pt-8">
          These success stories are just a glimpse of what can be achieved with
          the guidance and resources Uptick Talent offers. We are committed to
          shaping the future of tech and business, one success story at a time.
         </p>
      </div>
    </div>
  );
};

export default TestimonialSection;
