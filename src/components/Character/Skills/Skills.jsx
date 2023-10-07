import React from "react";
import { SKILL_LIST } from "../../../consts";
import "./Skills.styles.scss";

export default function Skills({ modifiers, skills, setSkills }) {
  const MAX_SKILL_PTS =
    10 + (isNaN(modifiers.Intelligence) ? 0 : 4 * modifiers.Intelligence);
  const [availablePts, setAvailablePts] = React.useState(MAX_SKILL_PTS);

  const skillUp = (key) => {
    const newVal = skills[key] + 1;
    setAvailablePts((prev) => prev - 1);
    setSkills((prev) => ({ ...prev, [key]: newVal }));
  };

  const skillDown = (key) => {
    const newVal = skills[key] - 1;
    setAvailablePts((prev) => prev + 1);
    setSkills((prev) => ({ ...prev, [key]: newVal }));
  };

  return (
    <div className="skills">
      <h3>Skills</h3>
      <span>Total skill points available: {availablePts}</span>
      {SKILL_LIST.map((skill) => {
        return (
          <div key={skill.name}>
            <span>
              {skill.name}:{skills[skill.name]}
            </span>
            <span>
              (Modifier: {skill.attributeModifier}):{" "}
              {modifiers[skill.attributeModifier]}
            </span>
            <button
              disabled={availablePts <= 0}
              onClick={() => skillUp(skill.name)}
            >
              +
            </button>
            <button onClick={() => skillDown(skill.name)}>-</button>
            <span>
              total: {skills[skill.name] + modifiers[skill.attributeModifier]}
            </span>
          </div>
        );
      })}
    </div>
  );
}
