import React from "react";
import "./Attributes.styles.scss";

const MAX_ATTR_PTS = 70;

export default function Attributes({ stats, setStats, modifiers }) {
  const totalScore =
    Object.values(stats).reduce((acc, value) => acc + value, 0) - stats.id;

  const skillUp = (key) => {
    const newVal = stats[key] + 1;
    setStats((prev) =>
      prev.map((char) =>
        char.id == stats.id ? { ...char, [key]: newVal } : char
      )
    );
  };
  const skillDown = (key) => {
    const newVal = stats[key] - 1;
    setStats((prev) =>
      prev.map((char) =>
        char.id == stats.id ? { ...char, [key]: newVal } : char
      )
    );
  };

  return (
    <div className="attributes">
      <h3>Attributes</h3>
      {Object.entries(stats)
        .filter(([key, _]) => key != "id")
        .map(([key, value]) => {
          return (
            <div key={key}>
              <span>
                {key}:{value} (Modifier: {modifiers[key]})
              </span>
              <button
                disabled={totalScore >= MAX_ATTR_PTS}
                onClick={() => skillUp(key)}
              >
                +
              </button>
              <button onClick={() => skillDown(key)}>-</button>
            </div>
          );
        })}
    </div>
  );
}
