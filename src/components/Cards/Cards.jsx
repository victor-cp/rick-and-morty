import Card from "../Card/Card";
import styles from "./Cards.module.css";

export default function Cards(props) {
  const { characters } = props;
  console.log(characters.name);
  return (
    <div>
      <h1 className="bg-danger container ">
        <div className="row ">
          {characters.map(({ name, species, gender, image }) => (
            <Card name={name} species={species} gender={gender} image={image} />
          ))}
        </div>
      </h1>
    </div>
  );
}
