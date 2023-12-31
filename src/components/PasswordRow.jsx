import "./PasswordRow.css"
import icon from "../assets/copy.svg";

export default function PasswordRow({password}) {

  function copyContent(){
    navigator.clipboard.writeText(password);
    alert("Copied the text: " + password);
  }

  return (
    <div className="password-container">
        <div className="password-row">
            <h1>{password}</h1>
            <button className="icon-button" onClick={copyContent}><img src={icon} /></button>
        </div>
    </div>
  );
}
