import styles from "../../../styles/beginners-page.module.css";
import BeginnerCuriosity from "../../../assets/beginnerCuriosity.png";

const Curiosity = () => {
  return (
    <div className={styles.curiosity}>
      <div className={styles.curiosityContent}>
        <div className={styles.curiosityImage}>
          <img
            src={BeginnerCuriosity}
            width={500}
            height={400}
            loading="lazy"
            alt="curious kid"
          />
        </div>
        <div className={styles.curiosityDetails}>
          <p>About Uptick Talent Beginners</p>
          <h1>Unlocking Curiosity</h1>
          <h6>
            At Uptick Talent, we believe that fostering an early interest in
            technology and business is essential for shaping the leaders of
            tomorrow.{" "}
          </h6>
          <h6>
            Our Beginners Program is designed to introduce secondary school
            students to the exciting possibilities of these fields, equipping
            them with essential skills and knowledge for future success.
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Curiosity;
