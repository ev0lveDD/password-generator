import "./CheckBox.css";

export default function CheckBox({name, value, handleChange, label}) {
  return (
    <div>
      <label className="container"> {label}
      <input type="checkbox" id={name} name={name} value={value} onChange={handleChange} />
      <span className="checkmark"></span></label>
    </div>
  );
}
