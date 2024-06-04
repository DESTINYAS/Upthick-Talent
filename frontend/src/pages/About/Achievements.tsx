import styles from "../../styles/about-page.module.css";
import { achievements } from "../../data/data";

const Achievements = () => {
  return (
    <section className={styles.achievements}>
      <div className={styles.container}>
        <h2>Our Achievements</h2>
        <h6>Our journey has been marked by significant milestones</h6>
        <div className={styles.cards}>
          {achievements.map((achievement) => (
            <div className={styles.card} key={achievement.id}>
              <div className={styles.box}>
                <img
                  src={achievement.imageId}
                  width={100}
                  height={100}
                  alt="card"
                  className={styles.imageCard}
                  loading="lazy"
                />
              </div>
              <h2>{achievement.title}</h2>
              <h6>{achievement.content}</h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
