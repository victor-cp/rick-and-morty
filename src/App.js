import "./App.css";
// import Card from "./components/Card/Card.jsx";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
// import SearchBar from "./components/SearchBar/SearchBar.jsx";
// import characters, { Rick } from "./data.js";
import { useState } from "react";
import { useEffect } from "react";

function App({ placeholder }) {
  const [characters, setCharacters] = useState([]);

  return (
    <div className="App" style={{ padding: "25px" }}>
      {/* <div className="Card">
        <Card
          name={Rick.name}
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
          onClose={() => window.alert("Emulamos que se cierra la card")}
        /> 
      </div> */}
      <Nav setCharacters={setCharacters} />
      <input type="text" placeholder={placeholder} />
      <hr />
      <div>
        <Cards characters={characters} />
      </div>
      <hr />
    </div>
  );
}

export default App;
