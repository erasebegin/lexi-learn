import React from 'react';
import Button from '../styles/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa';
import useGetTranslation from '../hooks/useGetTranslation';
import addCard from '../utils/addCard';

export default function WordDisplay({ enteredWord, setSubmittedCardId }) {
  const { translations, loading, error } = useGetTranslation(enteredWord);
  console.log({ translations });
  return (
    <Container className="py-4">
      <Row>
        <Col md={3} className="mx-auto d-flex flex-column align-items-center">
          {enteredWord && (
            <>
              <WordDisplayContainer className="p-4">
                <h1>{enteredWord}</h1>
                {translations &&
                  translations.map((translation) => (
                    <p key={translation.id}>{translation.l2_text}</p>
                  ))}
              </WordDisplayContainer>
              <Button
                className="mt-3"
                type="submit"
                onClick={(e) =>
                  setSubmittedCardId(addCard(e, enteredWord, translations))
                }
              >
                <FaPlus />
              </Button>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
}

const WordDisplayContainer = styled.div`
  background: white;
  box-shadow: 0px 0px 10px 0px #00000011;
  border-radius: 5px;
`;
