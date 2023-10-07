import React from "react";
import { SKILL_LIST } from "../../../consts";
import "./SkillCheck.styles.scss";

export default function SkillCheck({ index, skills, modifiers, setResult }) {
  const [selectedSkill, setSelectedSkill] = React.useState(SKILL_LIST[0].name);
  const [dc, setDc] = React.useState(0);

  const getAttribute = (name) =>
    SKILL_LIST.find((skill) => skill.name === name).attributeModifier;

  const roll = () => {
    setResult({
      id: index,
      skill: selectedSkill,
      val: skills[selectedSkill] + modifiers[getAttribute(selectedSkill)],
      rolled: Math.floor(Math.random() * dc),
      dc: dc,
    });
  };

  return (
    <div className="skill-check">
      <h3>Skill Check</h3>
      <span>Skill: </span>
      <select
        value={selectedSkill}
        onChange={(e) => setSelectedSkill(e.target.value)}
      >
        {SKILL_LIST.map((skill) => {
          return <option key={skill.name}>{skill.name}</option>;
        })}
      </select>
      <span>DC: </span>
      <input onChange={(e) => setDc(e.target.value)} />
      <button onClick={() => roll()}>Roll</button>
    </div>
  );
}
