import "./SkillCheckResult.styles.scss";
export default function SkillCheckResult({ result }) {
  return (
    <div className="skill-check-result">
      <h2>Skill Check Results</h2>
      <div className="skill-check-result--info">
        <div>Character: {result.id}</div>
        <div>
          Skill: {result.skill} : {result.val}
        </div>
        <div>You Rolled: {result.rolled}</div>
        <div>The DC was: {result.dc}</div>
        <div>
          Result:
          {result.rolled + result.val >= result.dc ? "Successfull" : "Failure"}
        </div>
      </div>
    </div>
  );
}
