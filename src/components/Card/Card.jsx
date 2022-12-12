import styles from "./Card.module.css";

export default function Card({ onClose, name, species, gender, image }) {
  return (
    <div className={`${styles.divContainer} col-3 m-2  `}>
      <div className={styles.buttonContainer}>
        <button onClick={onClose} className={styles.button}>
          X
        </button>
      </div>
      <div className={`${styles.imageContainer}`}>
        <img src={image} className={` img-fluid`} alt="" />
        <h2 className={styles.name}>{name}</h2>
      </div>
      <div className={styles.subDivContainer}>
        <h2 className={styles.species}>{species}</h2>
        <h2 className={styles.gender}>{gender}</h2>
      </div>
    </div>
  );
}
