import React from 'react';
import styled from "styled-components";

//Styling
const CharacterCardStyle = styled.div`
    background-color: lightblue;
    width: 30%;
    border-radius: 15px;
    margin-bottom: 3%;
    box-shadow: 5px 5px gold;
    

    h1:hover {
        color: blue;
        transform: scale(1.1);
    }
    
    p:hover{
        color: red;
        transform: scale(1.1);
        text-transform: uppercase;
    }
`;

const Character = (props) => {
    
    return (
        <CharacterCardStyle>
            <h1>{props.name}</h1>
            <p>Height: {props.height} </p>
            <p>Mass: {props.mass} "kg"</p>
            <p>Hair Color: {props.hair_color}</p>
            <p>Skin Color: {props.skin_color}</p>
            <p>Eye Color: {props.eye_color}</p>
            <p>Born: {props.birth_year}</p>
            <p>Gender:  {props.gender}</p>
            <p>Homeworld:  {props.homeworld}</p>

        </CharacterCardStyle>
    )
}

export default Character