import "./StrengthRow.css";

export default function StrengthRow({passwordStrength, passwordStrengthWord}) {
  return (
    <div className="strength-row">
      <p>STRENGTH</p>
      <div className="strength-row-meter">
        <h1>{passwordStrengthWord}</h1>
        <div className="progress-bars">
            <div className={passwordStrength < 2 || passwordStrength >= 2 ? "progress-bar-active" : "progress-bar-outline"}></div>
            <div className={passwordStrength === 2 || passwordStrength > 2 ? "progress-bar-active" : "progress-bar-outline"}></div>
            <div className={passwordStrength === 3 || passwordStrength > 3 ? "progress-bar-active" : "progress-bar-outline"}></div>
            <div className={passwordStrength === 4 ? "progress-bar-active" : "progress-bar-outline"}></div>
        </div>
      </div>
    </div>
  );
}
