import React from "react";
import "./Classes.styles.scss";
import { CLASS_LIST } from "../../../consts";

const classes = Object.keys(CLASS_LIST);

export default function Classes() {
  return (
    <div className="classes">
      <h3>Classes</h3>
    </div>
  );
}
