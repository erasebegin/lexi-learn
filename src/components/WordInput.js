import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../styles/Button';
import { ImEye } from 'react-icons/im';

const WordInput = ({ setEnteredWord }) => {
  const [word, setWord] = useState('');

  function handleChange(event) {
    setWord(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setEnteredWord(word);
    setWord('')
  }

  // function handleKeyDown(event) {
  //   console.log(event.keyCode);
  //   if (event.keyCode === 13) {
  //     handleClick()
  //   }
  // }

  // useEffect(() => {
  //   document.addEventListener('keydown', handleKeyDown, false);

  //   return () => {
  //     document.removeEventListener('keydown', handleKeyDown, false);
  //   };
  // }, []);

  return (
    <InputContainer onSubmit={(e) => handleSubmit(e)}>
      <input onChange={(e) => handleChange(e)} value={word} />
      <Button type="submit">
        <ImEye />
      </Button>
    </InputContainer>
  );
};

const InputContainer = styled.form`
  padding: 3rem;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export default WordInput;
