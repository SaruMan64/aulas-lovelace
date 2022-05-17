//import Cards from "./components/Cards";
import React, { useState, useEffect } from "react";
import { mountArray } from "./components/Card/Characters.js";
import Card from "./components/Card/index.jsx";
import styled from 'styled-components'

import "./components/Cards/";

const Button = styled.button`
  height: 5vmin;
  border: 1px solid white;
  border-radius: 10vmin;
  font-size: 3vmin;
  text-align: center;
  background: white;
  padding: 0 0.5em 0 0.5em;
  
  :hover {
    background: rgb(200,200,200);
    border: 1px solid rgb(200,200,200);
  }
`

function App() {
  const [episode, setEpisode] = useState(1);
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      console.log(characters);
      try {
        const arrayChar = await mountArray(episode);
        setCharacters(arrayChar);
      }
      catch (e) {
        console.error(e);
      }
      finally {
        console.log(characters);
        setLoading(false);
      }
    })();
  }, []);

  function changeEp() {/* 
    (async () => {
      setLoading(true);
      console.log(characters);
      const arrayChar = await mountArray(episode);
      setCharacters(arrayChar);
    })();
    console.log(characters);
    setLoading(false); */
    (async () => {
      setLoading(true);
      console.log(characters);
      try {
        const arrayChar = await mountArray(episode);
        setCharacters(arrayChar);
      }
      catch (e) {
        console.error(e);
      }
      finally {
        console.log(characters);
        setLoading(false);
      }
    })();
  }

  if (loading) {
    return (<h2 style={{ 'color': 'white' }}>loading</h2>);
  };

  return (
    <div className="App">
      <section>
      </section>
      <header>
        <h1>Rick and Morty Characters</h1>
        <label>
          Episode
          <input
            type="number"
            value={episode}
            onChange={(e) => {
              if (e.target.value <= 0) e.target.value = 1;
              if (e.target.value !== null && e.target.value !== '') {
                setEpisode(e.target.value);
              }
            }}
          />
          <Button onClick={(e) => { changeEp(); }}>Mudar</Button>
        </label>
      </header>
      <main className="cards">
        {characters.map((char, index) => {
          return <Card props={char} key={index}></Card>
        }
        )}
      </main >
    </div >
  );
}

export default App;
