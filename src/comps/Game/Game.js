import React from "react";

import "./Game.css";

function Game(props){
    return (
        <div id="game-div">
            <div id="current-expression">
                <div className="horizontaly-centered">
                    <p>f(x) = </p>
                    <div id="stones">
                        {props.target}
                    </div>
                </div>
                {props.message}
            </div>
            <div id="expression-div">
                {props.expression}
            </div>
        </div>
    );
}

export default Game;