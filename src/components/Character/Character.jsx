import React from "react";
import SkillCheck from "./SkillCheck";
import Attributes from "./Attributes";
import Classes from "./Classes";
import ClassInfo from "./ClassInfo";
import Skills from "./Skills";
import { SKILL_LIST } from "../../consts";
import "./Character.styles.scss";

export default function Character({
  index,
  stats,
  updateCharacters,
  setResult,
}) {
  const [selectedClass, setSelectedClass] = React.useState(null);
  const [modifiers, setModifiers] = React.useState({});
  const [skills, setSkills] = React.useState(
    SKILL_LIST.reduce((acc, obj) => {
      acc[obj.name] = 0;
      return acc;
    }, {})
  );

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
      <h2>Character: {index}</h2>
      <div
        className={`container ${
          selectedClass ? "four-columns" : "three-columns"
        }`}
      >
        <SkillCheck
          index={index}
          skills={skills}
          modifiers={modifiers}
          setResult={setResult}
        />
        <Attributes
          stats={stats}
          setStats={updateCharacters}
          modifiers={modifiers}
        />
        <Classes stats={stats} setSelectedClass={setSelectedClass} />
        {selectedClass && (
          <ClassInfo selected={selectedClass} setSelected={setSelectedClass} />
        )}
        <Skills
          stats={stats}
          modifiers={modifiers}
          skills={skills}
          setSkills={setSkills}
        />
      </div>
    </div>
  );
}
