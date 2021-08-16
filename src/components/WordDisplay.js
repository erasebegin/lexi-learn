import React from 'react';
import Button from '../styles/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa';
import useGetTranslation from '../hooks/useGetTranslation';
import addCard from '../utils/addCard';

export default function WordDisplay({
  enteredWord,
  setEnteredWord,
  setSubmittedCardId
}) {
  const { translations, loading, error } = useGetTranslation(enteredWord);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmittedCardId(addCard(enteredWord, translations));
    setEnteredWord('');
  }

  if (!enteredWord) {
    return <p></p>;
  }


  return (
    <Container className="py-4">
      <Row>
        <Col md={6} className="mx-auto d-flex flex-column align-items-center">
          {enteredWord && (
              <WordDisplayContainer className="py-4">
                <h1>{enteredWord}</h1>
                <div className="translations">
                  {translations &&
                    translations.map((translation) => (
                      <p key={translation.id}>{translation.l2_text}</p>
                    ))}
                </div>
                <Button
                  className="mt-3"
                  type="submit"
                  onClick={(e) => handleSubmit(e)}
                >
                  <FaPlus />
                </Button>
              </WordDisplayContainer>
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
  position: relative;
  width: 100%;
  padding-left: 2rem;

  h1 {
    padding-bottom: 1rem;
  }

  .translations {
    padding-bottom: 2rem;
    max-height: 300px;
    overflow-x: scroll;
  }

  .btn {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    border: none !important;
  }
`;
