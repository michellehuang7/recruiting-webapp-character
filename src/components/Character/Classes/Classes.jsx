import React from "react";
import "./Classes.styles.scss";
import { CLASS_LIST } from "../../../consts";

const classes = Object.keys(CLASS_LIST);

export default function Classes({ setSelectedClass }) {
  return (
    <div className="classes">
      <h3>Classes</h3>
      <ul className="classes-list">
        {classes.map((cls) => (
          <li key={cls} onClick={() => setSelectedClass(cls)}>
            {cls}
          </li>
        ))}
      </ul>
    </div>
  );
}
