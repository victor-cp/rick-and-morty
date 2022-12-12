import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css";

export default function Nav({ setCharacters }) {
  return (
    <div className={styles.searchBar}>
      <SearchBar setCharacters={setCharacters} />
    </div>
  );
}
