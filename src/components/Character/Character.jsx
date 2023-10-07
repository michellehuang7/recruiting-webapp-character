import React from "react";
import SkillCheck from "./SkillCheck";
import Attributes from "./Attributes";
import Classes from "./Classes";
import ClassInfo from "./ClassInfo";
import Skills from "./Skills";
import "./Character.styles.scss";

export default function Character({ stats }) {
  const [selectedClass, setSelectedClass] = React.useState(null);
  console.log(selectedClass);
  return (
    <div className="wrapper">
      <h2>Character: {stats.id}</h2>
      <div
        className={`container ${
          selectedClass ? "four-columns" : "three-columns"
        }`}
      >
        <SkillCheck />
        <Attributes />
        <Classes setSelectedClass={setSelectedClass} />
        {selectedClass && (
          <ClassInfo selected={selectedClass} setSelected={setSelectedClass} />
        )}
        <Skills />
      </div>
    </div>
  );
}
