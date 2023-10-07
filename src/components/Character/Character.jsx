import React from "react";
import SkillCheck from "./SkillCheck";
import Attributes from "./Attributes";
import Classes from "./Classes";
import ClassInfo from "./ClassInfo";
import Skills from "./Skills";
import "./Character.styles.scss";

export default function Character({ stats }) {
  return (
    <div className="wrapper">
      <h2>Character: {stats.id}</h2>
      <div className="container">
        <SkillCheck />
        <Attributes />
        <Classes />
        <ClassInfo />
        <Skills />
      </div>
    </div>
  );
}
