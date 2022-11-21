import React, { useState } from "react";

import "./Modals.css";

function IntroModal(props){
    const [messageNo, setMessageNo] = useState(0);

    if (messageNo === 0){
        return(
            <div className="game-modal">
                <h2>Vamos derivar!</h2>
                <p>
                    A derivada nada mais é do que uma função
                    que descreve a taxa de variação instantânea de
                    outra função, ou seja, uma função que demonstra
                    a diferença do valor de outra função entre quaisquer 
                    dois pontos (infinitamente próximos)
                </p>
        
                <button onClick={()=>{setMessageNo(messageNo+1)}}>
                    Entendido
                </button>
            </div>
        );
    }
    else if (messageNo === 1){
        return(
            <div className="game-modal">
                <h2>Vamos derivar!</h2>
                <p>
                    Uma analogia interessante com a derivada 
                    é a velocidade: a derivada de uma função 
                    representa a velocidade em que esta função
                    está crescendo (ou diminuindo) de valor
                </p>
        
                <button onClick={()=>{props.onClosing()}}>
                    Entendido
                </button>
            </div>
        );
    }
}

function Modals(props){
    const [modalClosed, closeModal] = useState(false);
    
    function wasClosed(){
        closeModal(true);
    }

    if (modalClosed){
        return (<></>);
    }
    
    switch (props.phase){
        case 1:
            return (<div id="modal-div"><IntroModal onClosing={wasClosed}/></div>)
        default:
            return (<></>)
    }
}

export default Modals;