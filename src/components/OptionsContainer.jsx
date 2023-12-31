import { useState, useEffect } from "react";
import Slider from "./Slider";
import "./OptionsContainer.css";
import "./PasswordRow.jsx";
import PasswordRow from "./PasswordRow.jsx";
import CheckBox from "./CheckBox.jsx";
import Button from "./Button.jsx";
import StrengthRow from "./StrengthRow.jsx";

export default function OptionsContainer() {

  const [characterLength, setCharacterLength] = useState(0);

  const [isUpper, setIsUpper] = useState(false);
  const [isLower, setIsLower] = useState(false);
  const [isNumber, setIsNumber] = useState(false);
  const [isSymbol, setIsSymbol] = useState(false);

  let uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  let numbers = "0123456789";
  let symbols = "!@#$%^&*+=";
  const [password, setPassword] = useState("P4$5W0rD!");
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [passwordStrengthWord, setPasswordStrengthWord] = useState("");

/************************************************************ */
  const handleChange = event => {
    if (event.target.name === "option1") {
      if (event.target.checked === true) {
      setIsUpper(true);
        } else {
          setIsUpper(false);
        }
    }

    if (event.target.name === "option2") {
      if (event.target.checked === true) {
      setIsLower(true);
        } else {
          setIsLower(false);
        }
    }

    if (event.target.name === "option3") {
      if (event.target.checked === true) {
      setIsNumber(true);
        } else {
          setIsNumber(false);
        }
    }

    if (event.target.name === "option4") {
      if (event.target.checked === true) {
      setIsSymbol(true);
        } else {
          setIsSymbol(false);
        }
    }
  }

  /************************************************************ */
  
  function handleClick() {
    let characterPool = "";
    setPassword(0);

    if(isUpper === true) {
      characterPool+=uppercaseLetters;
    }
    if(isLower === true) {
      characterPool+=lowercaseLetters;
    }
    if(isNumber === true) {
      characterPool+=numbers;
    }
    if(isSymbol === true) {
      characterPool+=symbols;
    }


    let result = "";
    for(let i=0; i<characterLength; i++) {
      let num = Math.floor(Math.random() * characterPool.length);
      console.log(num);
      result = result + characterPool[num];
      console.log(characterPool[num]);
    }
    setPassword(result);
    console.log(result);
    console.log(characterPool);
  }
  
  /************************************************************ */

  useEffect(() => {
    checkPasswordStrength();
  }, [password]);

  const checkPasswordStrength = async() => {
    let strength = 0;

        /* Is longer than 8 ? */
    if(password.length < 8){
      strength+=0;
    } else {
      strength+=1;
    }

        /* Are there any special uppercase and lowercase letters ? */
    if(password.match(/[a-z]/) && password.match(/[A-Z]/)){
      strength+=1
    } else {
      strength+=0
    }

        /* Are there any special numbers ? */
    if(password.match(/\d/)){
      strength+=1
    } else {
      strength+=0
    }

    /* Are there any special symbols ? */
    if (password.match(/[^a-zA-Z\d]/)){
      strength+=1
    } else {
      strength+=0
    }

    setPasswordStrength(strength);

    if(strength < 2){
      setPasswordStrengthWord("EASY");
    } else if (strength === 2 ) {
      setPasswordStrengthWord("MEDIUM");
    } else if (strength === 3) {
      setPasswordStrengthWord("DIFFICULT");
    } else {
      setPasswordStrengthWord("EXTR. DIFFICULT");
    }

  }

  /************************************************************ */

  return (
    <div>
      <PasswordRow password={password}/>
      <div className="options-container">
      <Slider characterLength={characterLength} setCharacterLength={setCharacterLength}/>
      <div className="options-column">
        <CheckBox name="option1" value={isUpper} handleChange={handleChange} label="Include Uppercase Letters"/>
        <CheckBox name="option2" value={isLower} handleChange={handleChange} label="Include Lowercase Letters"/>
        <CheckBox name="option3" value={isNumber} handleChange={handleChange} label="Include Numbers"/>
        <CheckBox name="option4" value={isSymbol} handleChange={handleChange} label="Include Symbols"/>
      </div>
      <StrengthRow passwordStrength={passwordStrength} passwordStrengthWord={passwordStrengthWord}/>
      <Button handleClick={handleClick}/>
      </div>
    </div>
  );
}
