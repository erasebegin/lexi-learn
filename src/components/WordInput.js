import React, {useState} from "react";

const WordInput = props => {

  const [enteredWord, setEnteredWord] = useState("");

  const handleInput = event => {
    setEnteredWord(event.target.value)
  };

  const handleClick = (event) => {
    event.preventDefault();
    props.onSubmit(enteredWord)
  }

  return (
  <div>
    <input onChange={handleInput} value={enteredWord} />
    <button onClick={handleClick}>ADD</button>
  </div>
  );
};

export default WordInput;
