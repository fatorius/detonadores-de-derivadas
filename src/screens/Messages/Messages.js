import React, { useEffect, useState } from "react";

import "./Messages.css";

function Messages(props){
    const [message, setMessage] = useState(props.initial_message);
    
    useEffect(()=>{
        setMessage(0);
    }, [props.phase])

    switch (props.phase){
        case 1:
            return (
                [<div className="message-div">
                    <p>
                        As pedras vermelhas
                        representam as
                        constantes
                    </p>
                    <button onClick={()=>{setMessage(message+1)}}>Ok</button>
                </div>,
                <div className="message-div">
                    <p>
                        As constantes, como o próprio
                        nome já indica, nunca mudam
                        de acordo com o tempo
                    </p>
                    <button onClick={()=>{setMessage(message+1)}}>Ok</button>
                </div>,
                <div className="message-div">
                    <p>
                        Sendo assim, a derivada de
                        uma constante é sempre zero
                    </p>
                    <button onClick={()=>{setMessage(message+1)}}>Ok</button>
                </div>,
                <div className="message-div">
                    <p>
                        Portanto, toda vez que você ver uma pedra
                        vermelha, você pode derivá-la digitando zero
                    </p>
                    <button onClick={()=>{setMessage(message+1)}}>Ok</button>
                </div>,
                <div className="message-div">
                    <p>
                        Vamos ver se você entendeu...derive essa função:
                    </p>
                    <button onClick={()=>{setMessage(message+1)}}>Ok</button>
                </div>,
                <></>][message]
            );
        case 2:
            return (
                [
                    <div className="message-div">
                        <p>
                            Continue derivando essas constantes!
                        </p>
                        <button onClick={()=>{setMessage(message+1)}}>Ok</button>
                    </div>,
                <></>][message]
            );
        case 5:
            return (
                [
                    <div className="message-div">
                        <p>
                            As pedras amarelas sempre 
                            representam um termo que
                            acompanha X. Em outras
                            palavras, ele tem grau 1
                        </p>
                        <button onClick={()=>{setMessage(message+1)}}>Ok</button>
                    </div>,
                    <div className="message-div">
                        <p>
                            A derivada desses termos é
                            sempre o número que está 
                            acompanhando o X, ou seja,
                            a derivada deles é uma constante
                        </p>
                        <button onClick={()=>{setMessage(message+1)}}>Ok</button>
                    </div>,
                    <div className="message-div">
                        <p>
                            Derive essas pedras amarelas
                        </p>
                        <button onClick={()=>{setMessage(message+1)}}>Ok</button>
                    </div>,
                    <></>
                ][message]
            );
        case 6:
            return (
                [<div className="message-div">
                    <p>
                        Repare que, como a derivada de 
                        um termo grau 1 é constante, 
                        agora temos uma expressão constante
                    </p>
                    <button onClick={()=>{setMessage(message+1)}}>Ok</button>
                </div>,
                <div className="message-div">
                    <p>
                        A derive essa constante
                    </p>
                    <button onClick={()=>{setMessage(message+1)}}>Ok</button>
                </div>,
                <></>][message]
            );
        case 11:
            return (
                [<div className="message-div">
                    <p>
                        Quando temos dois termos juntos em uma função,
                        podemos derivar eles individualmente
                    </p>
                    <button onClick={()=>{setMessage(message+1)}}>Ok</button>
                </div>,
                <div className="message-div">
                    <p>
                        Nesse caso, como o primeiro termo tem grau um, podemos
                        remover a variável, e o segundo é uma contrante, portanto
                        sua derivada é zero
                    </p>
                    <button onClick={()=>{setMessage(message+1)}}>Ok</button>
                </div>,
                <div className="message-div">
                <p>
                    Ou seja, a derivada dessa função é 2+0, que é igual a 2
                </p>
                <button onClick={()=>{setMessage(message+1)}}>Ok</button>
            </div>,
                <></>][message]
            );
        case 13:
            return(
                [<div className="message-div">
                    <p>
                        Vamos ver se você entendeu...continue derivando essas funções
                    </p>
                    <button onClick={()=>{setMessage(message+1)}}>Ok</button>
                </div>,
                <></>][message]
            );
        case 21:
            return(
                [<div className="message-div">
                    <p>
                        As pedras laranjas representam termos de grau 2
                    </p>
                    <button onClick={()=>{setMessage(message+1)}}>Ok</button>
                </div>,
                <div className="message-div">
                    <p>
                        Sempre que o termo com o X está elevado a um expoente,
                        multiplicamos o expoente pelo número que está em baixo
                    </p>
                    <button onClick={()=>{setMessage(message+1)}}>Ok</button>
                </div>,
                <div className="message-div">
                    <p>
                        Nesse caso, o número em baixo é 1, portanto multiplicamos 2x1 e deixamos o resultado
                        junto com o x. 
                    </p>
                    <button onClick={()=>{setMessage(message+1)}}>Ok</button>
                </div>,
                <div className="message-div">
                    <p>
                        Ou seja, agora temos 2x^2.
                    </p>
                    <button onClick={()=>{setMessage(message+1)}}>Ok</button>
                </div>,
                <div className="message-div">
                    <p>
                        Em seguida subtraímos 1 do expoente. Então o 2x^2 vira 2x^1, que é 
                        a mesma coisa que 2x.
                    </p>
                    <button onClick={()=>{setMessage(message+1)}}>Ok</button>
                </div>,
                <div className="message-div">
                    <p>
                        Sendo assim, a derivada de x^2 é 2x.
                    </p>
                    <button onClick={()=>{setMessage(message+1)}}>Ok</button>
                </div>,
                <></>][message]
            );
        case 24:
            return(
                [<div className="message-div">
                    <p>
                        Vamos derivar mais uma pedra laranja juntos
                    </p>
                    <button onClick={()=>{setMessage(message+1)}}>Ok</button>
                </div>,
                <div className="message-div">
                    <p>
                        Como dito antes, multiplicamos o número de cima pelo
                        número de baixo
                    </p>
                    <button onClick={()=>{setMessage(message+1)}}>Ok</button>
                </div>,
                <div className="message-div">
                    <p>
                        O número de cima é 2 e o de baixo é 3, portanto fazemos 3x2=6.
                        Agora temos 6x^2
                    </p>
                    <button onClick={()=>{setMessage(message+1)}}>Ok</button>
                </div>,
                <div className="message-div">
                    <p>
                        Em seguida subtraímos 1 do expoente. Então o 6x^2 vira 6x^1, que é 
                        a mesma coisa que 6x.
                    </p>
                    <button onClick={()=>{setMessage(message+1)}}>Ok</button>
                </div>,
                <div className="message-div">
                    <p>
                        Sendo assim, a derivada de 3x^2 é 6x.
                    </p>
                    <button onClick={()=>{setMessage(message+1)}}>Ok</button>
                </div>,
                <></>][message]
            );
        case 33:
            return(
                [<div className="message-div">
                    <p>
                        Vamos ver se você consegue derivar essa pedra
                    </p>
                    <button onClick={()=>{setMessage(message+1)}}>Ok</button>
                </div>,
                <div className="message-div">
                    <p>
                        Lembrando que o número de cima multiplica o de baixo
                        e depois subtrai 1 do expoente
                    </p>
                    <button onClick={()=>{setMessage(message+1)}}>Ok</button>
                </div>,
                <></>][message]
            );
        default:
            return (<></>);
    }
}

export default Messages;