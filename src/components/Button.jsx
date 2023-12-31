import "./Button.css";
import arrow from "../assets/right-arrow.svg";

export default function Button({handleClick}) {
    return(
        <button className="generate-button" onClick={handleClick}>GENERATE<img className="button-arrow" src={arrow} /></button>    
    );
}