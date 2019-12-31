import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import WordInput from "./components/WordInput";
import WordCard from "./components/WordCard";

const App = () => {
  const [wordId, setWordId] = useState(0);
  const [enteredWord, setWord] = useState("");
  const [definition, setDefinition] = useState([]);
  const [currentWords, setCurrentWords] = useState([]);
  const [apiArr, setApiArr] = useState([]);


  const handleWordInput = event => {
    setWord(event.target.value);
  };

  // const apiRequest = async () => {
  //   const response = await systran.get("", {
  //     params: { input: "wunderbar", source: "de", target: "en" }
  //   });
  //   setApiObj(response.data);
  //   console.log(response.data.outputs)
  // };

  const callApi = () => {
    axios({
      method: "GET",
      url:
        "https://systran-systran-platform-for-language-processing-v1.p.rapidapi.com/resources/dictionary/lookup",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host":
          "systran-systran-platform-for-language-processing-v1.p.rapidapi.com",
        "x-rapidapi-key": "4f86f3edfdmshf18247783d4906cp1eef26jsn606d81d0aed8"
      },
      params: {
        source: "de",
        target: "en",
        input: enteredWord
      }
    })
      .then(response => {
        setApiArr(response.data.outputs[0].output.matches[0].targets[0].lemma)
        console.log( "first response: ",
          response.data.outputs[0].output.matches[0].targets[0].lemma
        );
        setWordId(prevId => prevId + 1);
      })
      .catch(error => {
        console.log(error);
      });
  };

  // const addCurrentWord = () => {
  //   setDefinition(apiArr[0]);
  //   setWordId(prevId => prevId + 1);
  //   setCurrentWords(prevWords => [
  //     ...prevWords,
  //     { id: wordId, word: enteredWord, definition: definition }
  //   ]);
  // };

  useEffect(() => {
    setDefinition(apiArr[0]);
    setCurrentWords(prevWords => [
      ...prevWords,
      { id: wordId, word: enteredWord, definition: definition }
    ]);
  },[wordId]);

  console.log("apiArr: ",apiArr,"\ndef: ",definition)

  return (
    <AppContainer>
      <header className="App-header">
        <h1>Lexi Learn</h1>
      </header>
      <WordInput passInput={handleWordInput} wordState={enteredWord} />
      <button onClick={callApi}>ADD</button>
      <CardGrid>
        {currentWords.map(i => (
          <WordCard
            key={i.id}
            id={i.id + 1}
            word={i.word}
            definition={i.definition}
          />
        ))}
      </CardGrid>
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

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(250px, 1fr));
`;

export default App;
