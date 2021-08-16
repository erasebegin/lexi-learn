import React from 'react';
import WordCard from './WordCard';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CardList = ({ currentWords }) => {
  return (
    <ListContainer>
      <Row>
        {currentWords.map((card, i) => (
          <Col md={4} key={i}>
            <WordCard
              id={card.id}
              word={card.word}
              translations={card.translations}
            />
          </Col>
        ))}
      </Row>
    </ListContainer>
  );
};

const ListContainer = styled(Container)``;

export default CardList;
