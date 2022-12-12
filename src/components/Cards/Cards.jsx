import Card from "../Card/Card";
import styles from "./Cards.module.css";

export default function Cards(props) {
  const { characters } = props;
  console.log(characters.name);
  return (
    <div className={styles.divContainer}>
      <h1 className={styles.subtitle}>
        {characters.map(({ name, species, gender, image }) => (
          <Card name={name} species={species} gender={gender} image={image} />
        ))}
      </h1>
    </div>
  );
}
