import React, { useState } from "react"

import cookies from "../../cookies";

import CloseIcon from "../../icons/CloseIcon";
import GithubIcon from "../../icons/GithubIcon";
import InstagramIcon from "../../icons/InstagramIcon";
import KunumIcon from "../../icons/KunumIcon";
import MenuIcon from "../../icons/MenuIcon";
import TwitterIcon from "../../icons/TwitterIcon";

import "./Navbar.css";

function Navbar(props){
    const [display, setDisplay] = useState(false);
    const [displayAbout, setDisplayAbout] = useState(false);
    const [displayFases, setFase] = useState(false);

    if (display){
        return (
            <div id="menu">
                <div id="menu-items">
                    <button className="icon-button" onClick={()=>{setDisplay(false)}}>
                        <CloseIcon/>
                    </button>
                    <p onClick={()=>{
                        setDisplayAbout(!displayAbout);
                    }}>Sobre</p>

                    {displayAbout ? <div className="squared-div"><p className="small-text">
                        O jogo Detonadores de Derivadas foi desevolvido pela 
                        empresa Kunum, com o objetivo de ajudar alunos de ensino médio
                        e ensino superior a aprender a calcular derivadas de maneira divertida
                        através de um joguinho.
                    </p></div> : <></>}
                    
                    <p onClick={()=>{
                        setFase(!displayFases);
                    }}>Fases</p>

                    {displayFases ? <div>
                        <select onChange={(e)=>{
                            props.changePhase(e.target.value);
                            setDisplay(false);
                        }} value={0}>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="7">7</option>
                            <option value="9">9</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="15">15</option>
                            <option value="17">17</option>
                            <option value="19">19</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="30">30</option>
                            <option value="33">33</option>
                            <option value="34">34</option>
                            <option value="35">35</option>
                            <option value="36">36</option>
                            <option value="37">37</option>
                            <option value="41">41</option>
                            <option value="46">46</option>
                        </select>
                    </div> : <></>}

                    <p onClick={()=>{
                        cookies.setCookie("phase", 0, 30);
                        setDisplay(false);
                        props.onReset();
                    }}>Resetar progresso</p>

                    <p><a href="https://github.com/Kunum/detonadores-de-derivadas" rel="noreferrer" target="_blank">Ver código fonte</a></p>
                    <p><a href="https://speedrun.derivadas.kunum.com/">Versão speedrun</a></p>
                </div>

                <br/>
                
                <p>Versão beta 0.1.0</p>
                
                <br/>

                <div className="horizontaly-centered">
                    <KunumIcon/><div style={{width: "5vw"}}></div><p>Desenvolvido pela <a href="https://kunum.com" rel="noreferrer" target="_blank" className="underlined">Kunum</a></p>
                </div>
                <div className="horizontaly-centered" id="logos-div">
                    <a href="https://www.instagram.com/itskunum/" rel="noreferrer" target="_blank"><InstagramIcon/></a>
                    <a href="https://twitter.com/KunumTwt" rel="noreferrer" target="_blank"><TwitterIcon/></a>
                    <a href="https://github.com/Kunum" rel="noreferrer" target="_blank"><GithubIcon/></a>
                </div>

            </div>
        );
    }

    return (
        <nav>
            <h1>Detonadores de Derivadas</h1>
            <button className="icon-button" onClick={()=>{setDisplay(true)}}>
                <MenuIcon/>
            </button>
        </nav>
    )
}

export default Navbar;
