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
    input.preventDefault()
    props.updateDef(input.target.value);
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
  padding: 1em;
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
  box-shadow: 2px 2px 4px rgb(255, 242, 123);
`;

const H1 = styled.h1`
  text-align: center;
`;

const Definition = styled.p`
  font-style: italic;
`;

// EXPORT

export default WordCard;
