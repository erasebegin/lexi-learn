import React, { useState } from "react";
import styled from "styled-components";

// COMPONENT

const WordCard = props => {
  const [defClicked, setDefClicked] = useState(false);

  const handleDefClick = () => {
    setDefClicked(true);
    console.log(defClicked);
  };

  const handleDefSubmit = input => {
    props.updateDef(input.target.value);
    setDefClicked(false)
    console.log("changedDef: ", input.target.value);
  };

  return (
    <CardContainer>
      <CardId>{props.id}</CardId>
      <H1>{props.word}</H1>
      <Definition onClick={handleDefClick}>
        {defClicked ? (
          <form>
            <input onSubmit={handleDefSubmit} />
          </form>
        ) : (
          props.definition
        )}
      </Definition>
    </CardContainer>
  );
};

// STYLES

const CardId = styled.p`
  margin-bottom: .5em;
  font-weight: 700;
`;

const CardContainer = styled.div`
  background: rgb(255, 246, 164);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 50%;
  margin: 2em;
  padding: 2em 1em;
  box-shadow: 2px 2px 4px rgb(255, 242, 123);
`;

const H1 = styled.h1`
  text-align: center;
  margin: 0;
`;

const Definition = styled.p`
  font-style: italic;
`;

// EXPORT

export default WordCard;
