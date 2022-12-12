import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css";

export default function Nav({ setCharacters }) {
  return (
    <>
      <div className={`${styles.searchBar}`}>
        <label className={`m-3 display-6 ${styles.navLabel}`}>
          Rick and Morty App
        </label>
        <SearchBar setCharacters={setCharacters} />
      </div>
    </>
  );
}
