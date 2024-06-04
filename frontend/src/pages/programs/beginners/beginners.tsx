import Hero from "../../../components/Hero";
import PreFooter from "./PreFooter";
import Choose from "./Choose";
import Curiosity from "./Curiosity";
import Offer from "./Offer";
import BeginnerHero from "../../../assets/beginnerHero.png.png";

const Beginner = () => {
  return (
    <div>
      <div className="hero-section">
        <Hero
          backgroundImage={BeginnerHero}
          heading="Uptick Talent Beginners"
          paragraph="Welcome to the Uptick Talent Beginners Program where young minds ignite their journey into the world of technology and business."
          buttonText="Learn More"
        />
      </div>
      <div className="bg-beginner-background bg-no-repeat bg-cover">
        <Curiosity />
        <Offer />
       <div className="bg-upticklightb10">
       <Choose />
        <PreFooter
          heading="Learn More"
          paragraph="Are you interested in learning more, kindly reach out to us below, and our team will gladly guide you through."
        />
       </div>
      </div>
    </div>
  );
};

export default Beginner;