import styles from "../../styles/about-page.module.css";
import Button from "../../components/Button";
import JourneyImage from "../../assets/journey.png";

const Journey = () => {
  return (
   <div className="py-4 md:py-10">
    <div className="bg-white">
     <section className={styles.journey}>
      <div className={styles.journeyContent}>
        <div className={styles.description}>
          <h1>Join Us on this Journey</h1>
          <h6>
            At Uptick Talent, we invite you to be a part of our story. Whether
            you're a student looking to embark on a transformative educational
            journey, an entrepreneur seeking guidance and mentorship, or a
            partner organization interested in our talent placement services, we
            are here to welcome you into our vibrant community.
          </h6>
          <h6>
            Ready to embark on a journey of innovation and growth? Explore our
            programs, meet our mentors, and join us in shaping the future of
            technology and business.
          </h6>
          <Button title="Explore Our Programs" />
        </div>
        <div className={styles.imageId}>
          <img
            src={JourneyImage}
            width={400}
            height={100}
            alt="background"
          />
        </div>
      </div>
    </section>
   </div>
   </div>
  );
};

export default Journey;
