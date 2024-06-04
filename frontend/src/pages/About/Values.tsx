import styles from "../../styles/about-page.module.css";
import { values } from "../../data/data";

const Values = () => {
  return (
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
  );
};

export default Values;
