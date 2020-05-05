import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import styled from "styled-components";

//Components
import Character from "./components/Character";

//App
const App = () => {
  //useState
  const [characters, setCharacters] = useState([]);
  //useEffect + axios call
  useEffect(() => {
    axios.get("https://swapi.py4e.com/api/people/")
          .then(response => {
            setCharacters(response.data.results);
            console.log("The force is with us, Master", response);
          })
          .catch(error => {
            console.log("I find your lack of faith disturbing", error);
          });
  }, []);

  //Styling
  const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 75%;
    margin: 0 auto;
  `;
  
  return (
    <div className="App">
      <h1 className="Header">Ryan Mersmann Star Wars Characters React Wars</h1>
      <CardsContainer>
        {characters.map(prop => {
          return (
            <Character
              name={prop.name}
              height={prop.height}
              mass={prop.mass}
              hair_color={prop.hair_color}
              skin_color={prop.skin_color}
              eye_color={prop.eye_color}
              birth_year={prop.birth_year}
              gender={prop.gender}
            />
          );
        })}
      </CardsContainer>
    </div>
  );
};

export default App;
