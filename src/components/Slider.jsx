import "./Slider.css";

export default function Slider({characterLength, setCharacterLength}) {

    return(
        <div className="slider-container">
            <div className="character-length-row">
                <label>Character length</label>
                <p className="character-counter">{characterLength}</p>
            </div>
            <input className="slider" type="range" min="0" max="25" value={characterLength} onChange={(event) => setCharacterLength(event.target.value)}/>
        </div>
    );
}