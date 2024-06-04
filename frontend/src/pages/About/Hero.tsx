import React from "react";
import StoryPng from "../../assets/story.png";
import AboutHero from "../../assets/about-hero.png";
import styles from "../../styles/about-page.module.css";
import { values } from "../../data/data";

const Hero = () => {
  return (
    <div className="pt-28">
      <div className="container flex flex-col justify-center p-2 mx-2 py-4  lg:py-12 lg:flex-row lg:justify-between">
        <div className="flex text-white flex-col justify-center p-4 text-left sm:space-y-12 sm:ml-2 lg:ml-8 mr-8 rounded-sm lg:max-w-2xl xl:max-w-2xl lg:text-left">
          <h1 className="text-4xl py-2 font-bold sm:text-6xl">
            About Uptick Talent
          </h1>
          <p className="mt-2 mb-2 font-normal md:w-10/12 text-base md:text-lg sm:mb-12">
            At Uptick Talent, we are on a relentless mission to cultivate the
            next generation of technology and business leaders. Our journey is
            characterized by innovation, mentorship, and a commitment to
            nurturing talent from all walks of life.
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-end"></div>
        </div>
        <div className="flex items-center md:w-1/2 justify-center p-1 mt-8 lg:mr-2 lg:mt-0">
          <img
            src={AboutHero}
            alt="HeroImage"
            className="object-contain object-center-bottom h-full w-full"
            placeholder="blur"
            loading="lazy"
          />
        </div>
      </div>

      <div className="bg-upticklightb10">
      <div className=" text-black bg-upticklightb10 flex flex-col justify-center p-2 pt-4 mt-8 lg:py-12 lg:flex-row lg:justify-between">
        <div className="flex items-center  justify-center p-1 mt-8 lg:mr-2 lg:mt-0 h-72 sm:h-full ">
          <img
            src={StoryPng}
            alt="HeroImage"
            className="object-contain object-left-bottom h-72 sm:h-full "
            placeholder="blur"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col justify-center p-4 text-left md:text-right items-start md:items-end sm:space-y-9 sm:ml-2 lg:ml-8 rounded-sm lg:max-w-2xl xl:max-w-2xl lg:text-left">
          <h1 className="text-6xl font-bold sm:text-6xl">Our Story</h1>
          <p className="mt-2 mb-2 text-left md:text-right font-normal text-lg sm:mb-12">
            Uptick Talent was birthed to empower individuals with the knowledge
            and skills they need to thrive in today's fast-paced, ever-evolving
            world of technology and business. Since our inception, we have grown
            into a global community, serving as a launchpad for dreams and a
            bridge between aspirations and accomplishments.
          </p>
          <div className="flex flex-col md:space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start"></div>
        </div>
      </div>
      <section className={styles.values}>
      <div className={styles.container}>
        <h2>Our Values</h2>
        <h6>Our core values are the driving force behind everything we do</h6>

        <div className={styles.cards}>
          {values.map((value) => (
            <div className={styles.card} key={value.id}>
              <img
                src={value.imageId}
                width={30}
                height={30}
                loading="lazy"
                alt="card icon"
              />
              <h2>{value.title}</h2>
              <h6>{value.content}</h6>
            </div>
          ))}
        </div>
      </div>
    </section>
      </div>
    </div>
  );
};

export default Hero;