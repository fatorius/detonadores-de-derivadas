import React from "react";
import Navbar from "../../comps/Navbar/Navbar";
import GithubIcon from "../../icons/GithubIcon";
import InstagramIcon from "../../icons/InstagramIcon";
import KunumIcon from "../../icons/KunumIcon";
import TwitterIcon from "../../icons/TwitterIcon";

import "./Final.css";

function Final(props){
    function changePhase(newPhase){
        props.changePhase(newPhase);
    }
    
    return (
        <div className="App">
            <Navbar onReset={props.onReset} changePhase={changePhase}/>
            <div className='squared-div small-text' id="outro-text-div">
                <p>
                    Parabéns! Você chegou ao final do tunel!
                </p>
                <p>
                    Agora você já sabe o básico sobre derivadas,
                    e com isso você tem uma boa base para ampliar 
                    o seu conhecimento!
                </p>
                <p>
                    Um bom próximo passo para contribuir no seu conhecimento de
                    cálculo seria pesquisar sobre derivadas de <b>funções 
                    trigonométricas</b> ou <b>regra do produto</b> e <b>regra da divisão</b>
                </p>
                <p>
                    Obrigado por ter jogado esse jogo!
                </p>
                <div className="horizontaly-centered">
                    <KunumIcon/><div style={{width: "5vw"}}></div><p>Desenvolvido pela <a href="https://kunum.com" rel="noreferrer" target="_blank" className="underlined">Kunum</a></p>
                </div>
                <div className="horizontaly-centered" id="logos-div">
                    <a href="https://www.instagram.com/itskunum/" rel="noreferrer" target="_blank"><InstagramIcon/></a>
                    <a href="https://twitter.com/KunumTwt" rel="noreferrer" target="_blank"><TwitterIcon/></a>
                    <a href="https://github.com/Kunum" rel="noreferrer" target="_blank"><GithubIcon/></a>
                </div>
            </div>
        </div>
    )
}

export default Final;