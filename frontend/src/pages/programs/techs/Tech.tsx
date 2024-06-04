import React from "react";
import Button from "../../../components/Button";
import Hero from "../../../components/Hero";
import Program from "../../../components/Program";
import HeroTech from "../../../assets/hero-tech.png";
import SeDev from "../../../assets/se-tech.png";
import AiDataSection from "../../../assets/ai_data-tech.png";
import DesignTech from "../../../assets/design-tech.png";
import NonTech from "../../../assets/non_tech-tech.png.png";
import { Link } from "react-router-dom";

const Tech = () => {
  return (
    <div>
      <div className="hero-section">
        <Hero
          backgroundImage={HeroTech}
          heading="Uptick Talent Tech"
          paragraph=" Welcome to Uptick Talent Tech where we empower the next generation
          of technology leaders with cutting-edge knowledge and hands-on
          experience. Our Tech program offers a diverse range of
          opportunities to hone your skills, collaborate with industry
          experts, and build a successful career in the world of technology."
          buttonText="Apply Now"
        />
      </div>

      <div className="bg-tech-background bg-cover">
        <div className="se-section">
          <Program
            imageLeft={SeDev}
            title="Software Engineering"
            subTitle="Become a Top 1% Engineer"
            description="Our Software Engineering program is designed to provide students with the skills and knowledge to build a career in software development. Students will learn the fundamentals of programming, front-end and back-end development, and how to build a full-stack application."
            buttonText={<Link to="/software-development">Apply Now </Link>}
            categories={["Frontend", "Backend", "Mobile", "Fullstack"]}
            layout={""}
          />
        </div>

        <div className="ai_data-section">
          <Program
            imageRight={AiDataSection}
            title="AI & Data"
            subTitle="Become a Top 1% Engineer"
            description="Explore the limitless possibilities of AI and data engineering through our comprehensive fellowship programs. From data science to machine learning, data analysis to core data engineering, we offer a diverse range of opportunities. Join us and become part of a community that is building the future:"
            subDescription="Our AI & Data Engineering Fellowship is your gateway to becoming a data scientist, data engineer, analyst, or AI engineer. Learn, collaborate, and build the future with Uptick Talent."
            buttonText={<Link to="/ai-data-program">Apply Now </Link>}
            categories={[
              "Data Science",
              "Machine Learning",
              "Data Analysis",
              "Data Engineering",
            ]}
            layout={""}
          />
        </div>
        <div className="design-section">
          <Program
            imageLeft={DesignTech}
            title="Design"
            subTitle="Become a Top 1% Engineer"
            description="Explore the art of design through our design program, which cuts
          across critical concepts such as design thinking, systems thinking,
          design systems & design engineering, and unlock your creative
          potential and shape user experiences. Choose from a variety of core
          tracks, including:"
            buttonText={<Link to="/uiux-design">Apply Now </Link>}
            categories={[
              "UI Design",
              "UX Design",
              "Graphics Design",
              "UX Researcher",
            ]}
            layout={""}
          />
        </div>
        <div className="non-technical-section">
          <Program
            imageRight={NonTech}
            title="Non-Technical Programs"
            subTitle=" Master the Art of Scaling Technology Products"
            description="Our Non-Technical Fellowship programs are designed for business
          enthusiasts working to scale technology products, processes and
          operations. Dive into practical case studies and access weekly
          mentorship. Curriculum covers:"
            buttonText={<Link to="/product-management">Apply Now </Link>}
            categories={[
              "Project Management",
              "Operations",
              "Sales",
              "Business Development",
              "Project Management",
            ]}
            layout={""}
          />
        </div>
        <div className="py-20 mx-auto items-center justify-center text-deep">
          <div className="w-full mx-auto  flex flex-col items-center bg-white justify-center p-4 space-y-4 md:p-10 md:px-10 xl:px-12">
            <h1 className="text-center font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
              Ready to Join Uptick <br /> Talent Tech?
            </h1>
            <p className="text-center max-w-prose text-base md:text-lg lg:text-xl mb-4">
              If you&apos;re ready to embark on an exciting journey of learning,
              growth, and innovation, Uptick Talent Tech is here to guide you.
              Apply for your desired program or reach out to us for more
              information. Your future in technology starts here.
            </p>
            <div>
              <Button title="Apply Now" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
