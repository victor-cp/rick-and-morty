import { useState } from "react";
import styles from "./SearchBar.module.css";

// export default function SearchBar(props) {
//   return (
//     <div className={styles.inputContainer}>
//       <input className={styles.input} type="search" />
//       <button
//         className={styles.button}
//         onClick={() => {
//           console.log(1);
//         }}
//       >
//         Agregar
//       </button>
//     </div>
//   );
// }

export default function SearchBar({ setCharacters }) {
  const [search, setSearch] = useState("");

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }
  return (
    <div className={`${styles.inputContainer}`}>
      <input
        className={styles.input}
        type="search"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <button
        className={styles.button}
        onClick={(e) => {
          onSearch(search);
        }}
        value={search}
      >
        Agregar
      </button>
    </div>
  );
}
