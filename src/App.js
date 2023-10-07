import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import SkillCheckResult from "./components/SkillCheckResult";
import Character from "./components/Character";
import "./App.css";

const URL_STORE =
  "https://recruiting.verylongdomaintotestwith.ca/api/{michellehuang7}/character";

function App() {
  const [result, setResult] = useState({});
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(URL_STORE);
        setCharacters(response.data.body);
      } catch (error) {
        console.error("Error fetching the data", error);
      }
    }

    fetchData();
  }, []);

  const addCharacter = () => {
    setCharacters((prev) => [
      ...prev,
      {
        id: uuidv4(),
        Strength: 10,
        Dexterity: 10,
        Constitution: 10,
        Intelligence: 10,
        Wisdom: 10,
        Charisma: 10,
      },
    ]);
  };

  const resetCharacters = () => {
    setCharacters([]);
    setResult({});
  };

  const saveCharacters = () => {
    axios.post(URL_STORE, characters).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise - Michelle Huang</h1>
      </header>
      <section className="App-section">
        <div className="button-group">
          <button onClick={() => addCharacter()}>Add New Character</button>
          <button onClick={() => resetCharacters()}>
            Reset All Characters
          </button>
          <button onClick={() => saveCharacters()}>Save All Characters</button>
        </div>
        {result.id && <SkillCheckResult result={result} />}
        {characters.map((char, index) => {
          return (
            <Character
              index={index + 1}
              key={char.id}
              stats={char}
              updateCharacters={setCharacters}
              setResult={setResult}
            />
          );
        })}
      </section>
    </div>
  );
}

export default App;
