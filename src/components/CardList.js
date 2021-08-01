import React from "react";
import WordCard from "./WordCard";
import styled from "styled-components";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const CardList = ({currentWords}) => {
  return (
    <ListContainer>
      <Row>
        {currentWords.map(card => (
          <Col md={4}>
            <WordCard
              key={card.id}
              id={card.id + 1}
              word={card.word}
              translations={card.translations}
            />
          </Col>
        ))}
      </Row>
    </ListContainer>
  );
};

// S

const ListContainer = styled(Container)`

`;

export default CardList;
