import React, { useState, useEffect } from 'react';
import Page from '../components/Page';
import WordInput from '../components/WordInput';
import WordDisplay from '../components/WordDisplay';
import CardList from '../components/CardList';
import Header from '../components/Header';
import useGetCards from '../hooks/useGetCards';
import { useAuth } from '../contexts/AuthContext';
import { useHistory } from 'react-router-dom';

const App = () => {
  const [enteredWord, setEnteredWord] = useState('');
  const [submittedCardId, setSubmittedCardId] = useState([]);
  const { mergedWithIDs, loading: cardsLoading } = useGetCards(submittedCardId);
  const { currentUser } = useAuth();
  const history = useHistory();
  
  useEffect(() => {
    if (!currentUser) {
      history.push('/sign-in');
    }
  }, [currentUser]);

  if (!currentUser) {
    history.push('/sign-in');
    return <div></div>;
  }

  return (
    <Page>
      <Header />
      <WordInput setEnteredWord={setEnteredWord} />
      <WordDisplay
        enteredWord={enteredWord}
        setEnteredWord={setEnteredWord}
        setSubmittedCardId={setSubmittedCardId}
      />
      {cardsLoading && <h3>loading...</h3>}
      <CardList currentWords={mergedWithIDs} />
    </Page>
  );
};

export default App;
