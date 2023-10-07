import React from "react";
import { SKILL_LIST } from "../../../consts";
import "./SkillCheck.styles.scss";

export default function SkillCheck() {
  return (
    <div className="skill-check">
      <h3>Skill Check</h3>
      <span>Skill: </span>
      <select>
        {SKILL_LIST.map((skill) => {
          return <option key={skill.name}>{skill.name}</option>;
        })}
      </select>
      <span>DC: </span>
      <input />
      <button>Roll</button>
    </div>
  );
}
