import React from "react";
import styled, {css} from 'styled-components';


const Btn = styled.button`
    height: 15vh;
    width: 15vh;
    border-radius: 50%;
    color: gray;
    background-color: white;
    border: 1px solid black;
    margin-right: 2vh;
    margin-top: 3vh;
    margin-bottom: 3vh;

    ${props => props.start && css`
        border: none;
        background-color: green;
        color: white;
    `}

    ${props => props.pause && css`
        border: none;
        background-color: red;
        color:white;
    `}
`;


export default function Buttons(props) {
  return (
    <div>

        {(props.status === "initial")?
        <div>
            <Btn start onClick={props.start}>Start</Btn>
        </div>
        : ""
        }

        {(props.status === "pause")?
        <div>
            <Btn pause onClick={props.pause}>Pause</Btn>
            <Btn onClick={props.split}>Split</Btn>
        </div>
        : ""
        }


        {(props.status === "reset")?
        <div>
            <Btn pause onClick={props.resume}>Resume</Btn>
            <Btn onClick={props.reset}>Reset</Btn>
        </div>
        : ""
        }   
        
    </div>
  )
}
