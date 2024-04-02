import { useState } from "react";
import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/Display";

function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttontext) => {
    console.log(buttontext);
    if (buttontext === 'C') {
      setCalVal("")
    } else if (buttontext === '=') {
      const result = eval(calVal)
      setCalVal(result)
    }
    else {
      const newDisplayValue = calVal + buttontext;
      setCalVal(newDisplayValue);
    }

  };
  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal} />
      <ButtonsContainer onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
