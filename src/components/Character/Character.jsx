import React from "react";
import SkillCheck from "./SkillCheck";
import Attributes from "./Attributes";
import Classes from "./Classes";
import ClassInfo from "./ClassInfo";
import Skills from "./Skills";
import "./Character.styles.scss";

export default function Character({ stats, updateCharacters }) {
  const [selectedClass, setSelectedClass] = React.useState(null);
  const [modifiers, setModifiers] = React.useState({});

  const getModifier = (key) => {
    return stats[key] < 10
      ? stats[key] - 10
      : Math.floor((stats[key] - 10) / 2);
  };

  React.useEffect(() => {
    const mdf = Object.entries(stats)
      .filter(([key, _]) => key !== "id")
      .reduce((acc, [key, _]) => {
        acc[key] = getModifier(key);
        return acc;
      }, {});
    setModifiers(mdf);
  }, [stats]);

  return (
    <div className="wrapper">
      <h2>Character: {stats.id}</h2>
      <div
        className={`container ${
          selectedClass ? "four-columns" : "three-columns"
        }`}
      >
        <SkillCheck />
        <Attributes
          stats={stats}
          setStats={updateCharacters}
          modifiers={modifiers}
        />
        <Classes stats={stats} setSelectedClass={setSelectedClass} />
        {selectedClass && (
          <ClassInfo selected={selectedClass} setSelected={setSelectedClass} />
        )}
        <Skills />
      </div>
    </div>
  );
}
