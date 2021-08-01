import React, { useState, useEffect } from 'react';
import Page from '../components/Page';
import WordInput from '../components/WordInput';
import WordDisplay from '../components/WordDisplay';
import CardList from '../components/CardList';
import Header from '../components/Header';
import useGetCards from '../hooks/useGetCards'

const App = () => {
  const [enteredWord, setEnteredWord] = useState('');
  const [submittedCardId, setSubmittedCardId] = useState([]);

  const {currentWords, loading:cardsLoading} = useGetCards(submittedCardId)

  return (
    <Page>
      <Header />
      <WordInput setEnteredWord={setEnteredWord} />
      <WordDisplay enteredWord={enteredWord} setSubmittedCardId={setSubmittedCardId} />
      {cardsLoading && <h3>loading...</h3>}
      <CardList currentWords={currentWords} />
    </Page>
  );
};

export default App;
