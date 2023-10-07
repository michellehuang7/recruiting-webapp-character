import React from "react";
import "./Classes.styles.scss";
import { CLASS_LIST } from "../../../consts";

const classes = Object.keys(CLASS_LIST);

export default function Classes({ stats, setSelectedClass }) {
  const isQualified = (cls) => {
    for (const [role, val] of Object.entries(stats)) {
      if (val < CLASS_LIST[cls][role]) {
        return false;
      }
    }
    return true;
  };

  return (
    <div className="classes">
      <h3>Classes</h3>
      <ul className="classes-list">
        {classes.map((cls) => (
          <li
            key={cls}
            className={isQualified(cls) ? "red" : null}
            onClick={() => setSelectedClass(cls)}
          >
            {cls}
          </li>
        ))}
      </ul>
    </div>
  );
}
