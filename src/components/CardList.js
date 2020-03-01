import React from "react";
import WordCard from "./WordCard";
import styled from "styled-components";

const CardList = props => {
  return (
    <ListContainer>
      {props.currentWords.map(i => (
        <WordCard
          key={i.id}
          id={i.id + 1}
          word={i.word}
          definition={i.definition}
        />
      ))}
    </ListContainer>
  );
};

// S

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(250px, 1fr));
`;

export default CardList;
