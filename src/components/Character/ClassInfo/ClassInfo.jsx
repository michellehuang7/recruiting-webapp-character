import React from "react";
import { CLASS_LIST } from "../../../consts";
import "./ClassInfo.styles.scss";

export default function ClassInfo({ selected, setSelected }) {
  const info = CLASS_LIST[selected];
  return (
    <div className="class-info">
      <h3>Class Info</h3>
      {Object.entries(info).map(([key, value]) => {
        return (
          <div key={key}>
            <span>
              {key}:{value}
            </span>
          </div>
        );
      })}
      <button className="close-view" onClick={() => setSelected(null)}>
        Close Requirement View
      </button>
    </div>
  );
}
