import React, { useState } from 'react';
import Card from '../styles/Card';
import styled from 'styled-components';

// COMPONENT

const WordCard = ({ word, translations }) => {
  const [defClicked, setDefClicked] = useState(false);
  const [defValue, setDefValue] = useState(translations);
  console.log({translations})

  const handleDefClick = () => {
    setDefClicked(true);
    console.log(defClicked);
  };

  const handleDefSubmit = (input) => {
    setDefClicked(false);
    console.log('changedDef: ', input.target.value);
  };

  return (
    <Card className="my-1 p-3">
      <h1>{word}</h1>
      <div onClick={handleDefClick}>
        {translations &&
          translations.map((translation) => <p>{translation}</p>)}
      </div>
    </Card>
  );
};

// STYLES

// EXPORT

export default WordCard;
