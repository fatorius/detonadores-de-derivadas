import React from "react";
import Navbar from "../../comps/Navbar/Navbar";

import './StartScreen.css';

function StartScreen(props){
    function changePhase(newPhase){
        props.changePhase(newPhase);
    }
    
    return (
        <div className="App">
            <Navbar changePhase={changePhase}/>

            <div className='squared-div' id="intro-text-div">
            <p>
                Você trabalha em uma empresa de detonação,
                porém ao detonar uma montanha, você encontra rochas 
                com funções matemáticas, e para destruí-las, 
                você precisará usar a <b>derivada</b>.
            </p>
            <p>
                Vamos embarcar nessa jornada, e aprender
                um pouco sobre cálculo!
            </p>
            </div>

            <button className='squared-button' id="start-button" onClick={()=>{props.onContinue()}}>
                Vamos lá!
            </button>
        </div>
    )
}

export default StartScreen;