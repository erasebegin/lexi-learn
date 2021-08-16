import React, { useState } from 'react';
import styled from 'styled-components';
import { FaTrashAlt } from 'react-icons/fa';
import { doc, updateDoc, arrayRemove, getDoc } from "firebase/firestore";
import { db } from '../firebase';

// COMPONENT

const WordCard = ({ id, word, translations }) => {
  const [cardOpen, setCardOpen] = useState(false);
  
  
  async function deleteItem(item){
    const cardRef = await doc(db, "cards", id);
    console.log({word})

    await updateDoc(cardRef, {
      translations: arrayRemove(item)
  });
  }

  return (
    <StyledWordCard className="my-1 p-3" $cardOpen={cardOpen}>
      <h1 onClick={() => setCardOpen(!cardOpen)}>{word}</h1>
      <div className="translation-container">
        {translations &&
          translations.map((translation, i) => (
            <div className="translation">
              <p key={i}>{translation}</p>
              <div className="translation-buttons">
                <button
                  onClick={() => deleteItem(translation)}
                  className="delete-button"
                >
                  <FaTrashAlt />
                </button>
              </div>
            </div>
          ))}
      </div>
    </StyledWordCard>
  );
};

// STYLES

const StyledWordCard = styled.div`
  max-height: ${(props) => (props.$cardOpen ? 'unset' : '80px')};
  transition: max-height 200ms ease-in-out;
  overflow: hidden;
  background: white;

  h1 {
    cursor: pointer;
    padding-bottom: 1rem;
    text-align: center;
  }

  .translation-container {
    max-height: 300px;
    overflow-y: scroll;

    .translation {
      display: flex;
      justify-content: space-between;
      padding: 0.5rem 1rem;
      box-shadow: 0px 0px 5px 0px #ebebeb88;

      .delete-button {
        cursor: pointer;
      }
    }
  }
`;

// EXPORT

export default WordCard;
