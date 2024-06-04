import styles from "../../../styles/beginners-page.module.css";

import { offers } from "../../../data/data";

const Offer = () => {
  return (
    <div className={styles.offer}>
      <h1>What We Offer</h1>
      <div className={styles.offers}>
        {offers.map((offer) => (
          <div className={styles.offerContent} key={offer.id}>
            <div className={styles.offerArrow}>
              <img
                src={offer.arrow}
                loading="lazy"
                width={150}
                height={150}
                alt="arrow direction"
              />
            </div>
            <div className={styles.offerDetails}>
              <h5>{offer.title}</h5>
              <h6>{offer.content}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offer;
