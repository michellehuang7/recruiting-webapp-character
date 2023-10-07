import { useState } from "react";
import SkillCheckResult from "./components/SkillCheckResult";
import Character from "./components/Character";
import "./App.css";

function App() {
  const [result, setResult] = useState({});
  const [characters, setCharacters] = useState([
    {
      id: 1,
      Strength: 10,
      Dexterity: 10,
      Constitution: 10,
      Intelligence: 10,
      Wisdom: 10,
      Charisma: 10,
    },
    {
      id: 2,
      Strength: 10,
      Dexterity: 10,
      Constitution: 10,
      Intelligence: 10,
      Wisdom: 10,
      Charisma: 10,
    },
  ]);
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise - Michelle Huang</h1>
      </header>
      <section className="App-section">
        <div className="button-group">
          <button>Add New Character</button>
          <button>Reset All Characters</button>
          <button>Save All Characters</button>
        </div>
        {result.id && <SkillCheckResult result={result} />}
        {characters.map((char) => {
          return (
            <Character
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
