import React, { useState, useEffect } from "react";
import styled from "styled-components";
import WordInput from "./components/WordInput";
import CardList from "./components/CardList";

import axios from "axios";

const App = () => {

  const [currentWords, setCurrentWords] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [enteredWord, setEnteredWord] = useState("");
  const [wordId, setWordId] = useState(0);
  const [definition, setDefinition] = useState("");

  const callApi = word => {
    setEnteredWord(word);
    setIsLoading(true);
    setWordId(prevId => prevId + 1);
    axios({
      method: "GET",
      url:
        "https://translated-mymemory---translation-memory.p.rapidapi.com/api/get",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host":
          "translated-mymemory---translation-memory.p.rapidapi.com",
        "x-rapidapi-key": "4f86f3edfdmshf18247783d4906cp1eef26jsn606d81d0aed8"
      },
      params: {
        mt: "1",
        onlyprivate: "0",
        langpair: "de|en",
        q: word
      }
    })
      .then(response => {
        setIsLoading(false);
        setDefinition(response.data.responseData.translatedText);
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false);
        setDefinition("enter definition");
      });
  };

  useEffect(() => {

    setCurrentWords(prevWords => [
      ...prevWords,
      { id: wordId, word: enteredWord, definition: definition }
    ]);
    console.log("useEffect")
  }, [enteredWord]);

  // const handleUpdateDef = (word) => {
  //   setDefinition(word)
  //   console.log("triggered handleUpdateDef")
  // }

  return (
    <AppContainer>
      <header className="App-header">
        <h1>Lexi Learn</h1>
      </header>
      <WordInput onSubmit={callApi} />
      {isLoading ? <h3>loading...</h3> : <h3>&nbsp;</h3>}
      <CardList currentWords={currentWords}/>
    </AppContainer>
  );
};

// STYLES

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: rgb(255, 249, 195);
  font-family: "Oswald", Helvetica, Arial, sans-serif;
  border-radius: 5px;
`;

export default App;
