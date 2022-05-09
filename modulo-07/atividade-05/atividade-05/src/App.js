//import Cards from "./components/Cards";
import React, { useState, useEffect } from "react";
import { mountArray } from "./components/Card/Characters.js";

import "./components/Cards/";

function App() {
  const [episode, setEpisode] = useState(1);
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      console.log(characters);
      const arrayChar = await mountArray(episode);
      setCharacters(arrayChar);
    })();
    console.log(characters);
    setLoading(false);
  }, []);

  if (loading) {
    return (<h2>loading</h2>);
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
            onChange={(e) => setEpisode(e.target.value)}
          />
        </label>
      </header>
      <main className="cards">
        {characters.map((char) => {
          return (
            <div className={char.status.toLowerCase()} >
              <figure>
                <div className={char.status.toLowerCase() + "-stripe"}><span>{char.status.toLowerCase()}</span></div>
                <img src={char.image} alt={char.name} />
              </figure>
              <div>
                <p>
                  <strong>Name: </strong> {char.name === "" ? "Confidential" : char.name}
                </p>
                <p>
                  <strong>Species: </strong> {char.species === "" ? "Confidential" : char.species}
                </p>
                <p>
                  <strong>Type: </strong> {char.type === "" ? "Confidential" : char.type}
                </p>
                <p>
                  <strong>Gender: </strong> {char.gender === "" ? "Confidential" : char.gender}
                </p>
              </div>
            </div>
          )
        }
        )}
      </main >
    </div >
  );
}

export default App;
