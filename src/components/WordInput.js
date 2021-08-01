import React, {useState} from "react";
import styled from 'styled-components';
import Button from '../styles/Button';
import {ImEye} from 'react-icons/im'


const WordInput = ({setEnteredWord}) => {

  const [word, setWord] = useState("");

  const handleInput = event => {
    setWord(event.target.value)
  };

  return (
  <InputContainer>
    <input onChange={handleInput} value={word} />
    <Button onClick={()=>setEnteredWord(word)}><ImEye /></Button>
  </InputContainer>
  );
};

const InputContainer = styled.div`
  padding: 3rem;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export default WordInput;
