import React, { useState } from 'react';
import Card from '../styles/Card';
import styled from 'styled-components';

// COMPONENT

const WordCard = (props) => {
  const [defClicked, setDefClicked] = useState(false);

  const handleDefClick = () => {
    setDefClicked(true);
    console.log(defClicked);
  };

  const handleDefSubmit = (input) => {
    props.updateDef(input.target.value);
    setDefClicked(false);
    console.log('changedDef: ', input.target.value);
  };

  return (
    <Card>
      <p>{props.id}</p>
      <h1>{props.word}</h1>
      <div onClick={handleDefClick}>
        {defClicked ? (
          <form>
            <input onSubmit={handleDefSubmit} />
          </form>
        ) : (
          props.definition
        )}
      </div>
    </Card>
  );
};

// STYLES

// EXPORT

export default WordCard;
