import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Quote from "../../assets/quote.png";

interface ExtendedSliderSettings extends SliderSettings {
  centerMode?: boolean;
  centerPadding?: string;
}

interface SliderSettings {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  responsive: Array<{ breakpoint: number; settings: Partial<SliderSettings> }>;
}

interface SliderArrowProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Swiper: React.FC = () => {
  const CustomNextArrow: React.FC<SliderArrowProps> = ({ onClick }) => (
    <button
      onClick={onClick}
      className="slick-arrow right-arrow border-gray-400 bg-gray-300 px-3 py-2 font-black text-lg text-white border-2 hover:bg-uptickblue100 rounded-full"
      style={{
        position: "absolute",
        right: "150px",
        bottom: "-70px",
        zIndex: 1,
      }}>
      &rarr;
    </button>
  );

  const CustomPrevArrow: React.FC<SliderArrowProps> = ({ onClick }) => (
    <button
      onClick={onClick}
      className="slick-arrow left-arrow border-gray-400 bg-gray-300 px-3 py-2 font-black text-lg text-white border-2 hover:bg-uptickblue100 rounded-full"
      style={{
        position: "absolute",
        left: "150px",
        bottom: "-70px",
        zIndex: 1,
      }}>
      &larr;
    </button>
  );

  const settings: ExtendedSliderSettings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0", 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-xl mx-auto mt-8 relative space-x-6">
      <Slider
        {...settings}
        nextArrow={<CustomNextArrow />}
        prevArrow={<CustomPrevArrow />}>
        <div>
          <div className="p-4 w-full h-72 border-2 rounded-2xl space-y-2 object-cover bg-uptickbg text-white transition-transform transform scale-50 slick-current">
            <p className="text-sm font-normal">
              Our journey during the Startup School Cohort has been incredible.
              We're in the process of establishing partnerships with imisi3d, a
              leading VR company in Africa, and Geothe Institute, a renowned
              German center in Nigeria. Additionally, we're launching an
              out-of-school program to cater to recent secondary school
              graduates, and our student reach has grown exponentially. We have
              ambitious plans to impact over 1,000 students in the coming weeks,
              thanks to the comprehensive support from the Cohort.
            </p>

            <div className="flex flex-row justify-between">
              <div className="flex">
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-sm text-uptickblue10">
                  codePlay72 &#8599;
                </a>
              </div>
              <div className="flex mt-8">
                <img src={Quote} alt="Quote" className="" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="p-4 w-full h-72 border-2 rounded-2xl object-cover space-y-2 bg-uptickbg text-white  transition-transform transform scale-50 slick-current">
            <p className="text-sm font-normal">
              {" "}
              At Megas Agriculture, our journey has been nothing short of
              transformative, owing much of our success to the indispensable
              guidance from Startup School. Our elation knows no bounds,
              propelling our farm-to-market platform's growth from servicing 700
              farmers to an astounding 4000. This monumental achievement stands
              as a testament to the efficacy of the strategies we imbibed during
              our time at the Cohort, solidifying our commitment to
              revolutionizing the agricultural industry.
            </p>

            <div className="flex flex-row justify-between">
              <div className="flex">
                <a
                  href="https://www.megasagriculture.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-sm text-uptickblue10">
                  Megas Agriculture &#8599;
                </a>
              </div>
              <div className="flex mt-8">
                <img src={Quote} alt="Quote" className="" />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="p-4 border-2 w-full h-72 space-y-4 rounded-2xl object-cover bg-uptickbg text-white transition-transform transform scale-50 slick-current">
            <p className="text-sm font-normal">
              {" "}
              Startup School Cohort's mentorship and resources have truly made a
              difference for Jubal. As we prepare to relaunch our new app, we've
              achieved over $20,000 in Gross Merchandise Value (GMV) and
              generated revenue exceeding $2,000. The Cohort's support has been
              a game-changer.
            </p>

            <div className="flex flex-row justify-between">
              <div className="flex">
                <a
                  href="https://www.thejubal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-sm text-uptickblue10">
                  Jubal &#8599;
                </a>
              </div>
              <div className="flex mt-20">
                <img src={Quote} alt="Quote" className="" />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="p-4 w-full h-72 border-2 rounded-2xl object-cover space-y-2 bg-uptickbg text-white  transition-transform transform scale-50 slick-current">
            <p className="text-sm font-normal">
              {" "}
              At Megas Agriculture, our journey has been nothing short of
              transformative, owing much of our success to the indispensable
              guidance from Startup School. Our elation knows no bounds,
              propelling our farm-to-market platform's growth from servicing 700
              farmers to an astounding 4000. This monumental achievement stands
              as a testament to the efficacy of the strategies we imbibed during
              our time at the Cohort, solidifying our commitment to
              revolutionizing the agricultural industry.
            </p>

            <div className="flex flex-row justify-between">
              <div className="flex">
              <a
                  href="https://www.megasagriculture.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-sm text-uptickblue10">
                  Megas Agriculture &#8599;
                </a>
              </div>
              <div className="flex mt-8">
                <img src={Quote} alt="Quote" className="" />
              </div>
            </div>
          </div>
        </div>

        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default Swiper;
