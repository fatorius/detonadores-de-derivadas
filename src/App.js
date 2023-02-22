import { useState } from 'react';
import './App.css';
import Fases from './screens/Fases/Fases';
import StartScreen from './screens/StartScreen/StartScreen';
import cookies from './cookies';
import Stone from "./comps/Stone/Stone";
import Final from './screens/Final/Final';
import fasesValidas from './fasesValidas';

function gerarSinal(){
  if (Math.random() > 0.5){
    return "+";
  }
  else{
    return "-";
  }
}

function gerarConstantFunction(lim){
  let constant = Math.round(Math.random() * lim) + 1;
  return [<Stone type="constant">{constant}</Stone>, constant.toString()]
}

function gerarGrauUm(lim){
  let constant = Math.round(Math.random() * lim) + 1;
  return [<Stone type="grau-1">{constant > 1 ? constant + "x": "x"}</Stone>, constant.toString()+"x"]
}

function gerarGrauUmComConstante(limGU, limC){
  let t1 = Math.round(Math.random() * limGU) + 1;
  let t2 = Math.round(Math.random() * limC) + 1;
  return [
    <div className='horizontaly-centered' style={{fontSize:"30px"}}><Stone type="grau-1">{t1 > 1 ? t1 + "x": "x"}</Stone> + <Stone type="constant">{t2}</Stone></div>,
    t1.toString()+"x +" + t2.toString()
  ]
}

function gerarGrauCompleto(grau){
  let termos = [];
  let expressao = "";
  let valor = 0
  let sinal = "";

  for (grau; grau > 1; grau--){
    valor = Math.round(Math.random()*9) + 1;
    sinal = gerarSinal();
    termos.push(<Stone key={grau} type={"grau-"+grau}>{valor > 1 ? valor + "x": "x"}<span className='expoente'>{"^"+grau}</span></Stone>)
    termos.push(sinal);
    expressao += valor.toString() + "x^" + grau.toString() + " " + sinal;
  }

  valor = Math.round(Math.random()*9) + 1;
  sinal = gerarSinal();
  termos.push(<Stone key={1} type={"grau-1"}>{valor > 1 ? valor + "x": "x"}</Stone>)
  termos.push(sinal);
  expressao += valor.toString() + "x " + sinal;

  valor = Math.round(Math.random()*9) + 1;
  termos.push(<Stone key={0} type="constant">{valor}</Stone>)
  expressao += valor.toString();

  return [<div className='horizontaly-centered' style={{fontSize:"30px"}}>{termos}</div>, expressao];
}

function turnIntoElement(exp){
  exp = exp.replaceAll("+", " +")
  exp = exp.replaceAll("-", " -");

  let termos = [];
  let termosCount = 0;

  let terms = exp.split(" ");

  terms.forEach(e => {
    termosCount++;
    
    if (e.includes("+") && termosCount !== 0){
      termos.push("+");
    }
    else if (e.includes("-") && termosCount !== 0){
      termos.push("-");
    }

    e = e.replaceAll("+","").replaceAll("-", "");

    // constant
    if (!e.includes("x")){
      termos.push(<Stone type="constant" key={termosCount}>{e}</Stone>);
    }

    // grau um
    else if (!e.includes("^")){
      termos.push(<Stone type="grau-1" key={termosCount}>{e}</Stone>);
    }

    // outros graus
    else{
      let numeros = e.split("x^");
      termos.push(<Stone type={"grau-" + numeros[1]} key={termosCount}>{numeros[0] + "x"}<span className='expoente'>{"^" + numeros[1]}</span></Stone>);
    }

  });

  return [<div className='horizontaly-centered' style={{fontSize:"30px"}}>{termos}</div>, exp]
}

let generators = [
    ()=>{
      return 0;
    },
    ()=>{
        return gerarConstantFunction(9);
    }, 
    ()=>{
      return gerarConstantFunction(19);
    }, 
    ()=>{
      return gerarConstantFunction(49);
    },
    ()=>{
      return gerarConstantFunction(99);
    },
    ()=>{
      return gerarGrauUm(9);
    },
    ()=>{
      return turnIntoElement(last_derivative);
    },
    ()=>{
      return gerarGrauUm(19);
    },
    ()=>{
      return turnIntoElement(last_derivative);
    },
    ()=>{
      return gerarGrauUm(99);
    },
    ()=>{
      return turnIntoElement(last_derivative);
    },
    ()=>{
      return [
        <div className='horizontaly-centered' style={{fontSize:"30px"}}><Stone type="grau-1">2x</Stone> + <Stone type="constant">3</Stone></div>,
        "2x +3"
      ]
    },
    ()=>{
      return [
        <Stone type="constant">2</Stone>,
        "2"
      ]
    },
    ()=>{
      return gerarGrauUmComConstante(9, 19);
    },
    ()=>{
      return turnIntoElement(last_derivative);
    },
    (arg)=>{
      return gerarGrauUmComConstante(99, 99);
    },
    ()=>{
      return turnIntoElement(last_derivative);
    },
    (arg)=>{
      return gerarGrauUmComConstante(99, 99);
    },
    ()=>{
      return turnIntoElement(last_derivative);
    },
    (arg)=>{
      return gerarGrauUmComConstante(99, 9);
    },
    ()=>{
      return turnIntoElement(last_derivative);
    },
    ()=>{
      return [
        <Stone type="grau-2">x<span className='expoente'>^2</span></Stone>,
        "x^2"
      ]
    },
    ()=>{
      return [
        <Stone type="grau-1">2x</Stone>,
        "2x"
      ]
    },
    ()=>{
      return [
        <Stone type="constant">2</Stone>,
        "2"
      ]
    },
    ()=>{
      return [
        <Stone type="grau-2">3x<span className='expoente'>^2</span></Stone>,
        "3x^2"
      ]
    },
    ()=>{
      return [
        <Stone type="grau-1">6x</Stone>,
        "6x"
      ]
    },
    ()=>{
      return [
        <Stone type="constant">6</Stone>,
        "6"
      ]
    },
    ()=>{
      return gerarGrauCompleto(2);
    },
    ()=>{
      return turnIntoElement(last_derivative);
    },
    ()=>{
      return turnIntoElement(last_derivative);
    },
    ()=>{
      return gerarGrauCompleto(2);
    },
    ()=>{
      return turnIntoElement(last_derivative);
    },
    ()=>{
      return turnIntoElement(last_derivative);
    },
    ()=>{
      return [
        <Stone type="grau-3">x<span className='expoente'>^3</span></Stone>,
        "x^3"
      ]
    },
    ()=>{
      return [
        <Stone type="grau-2">3x<span className='expoente'>^2</span></Stone>,
        "3x^2"
      ]
    },
    ()=>{
      return [
        <Stone type="grau-1">6x</Stone>,
        "6x"
      ]
    },
    ()=>{
      return [
        <Stone type="constant">6</Stone>,
        "6"
      ]
    },
    ()=>{
      return gerarGrauCompleto(3);
    },
    ()=>{
      return turnIntoElement(last_derivative);
    },
    ()=>{
      return turnIntoElement(last_derivative);
    },
    ()=>{
      return turnIntoElement(last_derivative);
    },
    ()=>{
      return gerarGrauCompleto(4);
    },
    ()=>{
      return turnIntoElement(last_derivative);
    },
    ()=>{
      return turnIntoElement(last_derivative);
    },
    ()=>{
      return turnIntoElement(last_derivative);
    },
    ()=>{
      return turnIntoElement(last_derivative);
    },
    ()=>{
      return [
        <Stone type="seno">sen(x)</Stone>,
        "sen(x)"
      ];
    },
    ()=>{
      return [
        <Stone type="cosseno">cos(x)</Stone>,
        "cos(x)"
      ];
    },
    ()=>{
      return [
        <Stone type="seno">-sen(x)</Stone>,
        "-sen(x)"
      ];
    },
    ()=>{
      return [
        <Stone type="cosseno">-cos(x)</Stone>,
        "-cos(x)"
      ];
    },
    ()=>{
      return [
        <Stone type="seno">sen(x)</Stone>,
        "sen(x)"
      ];
    },
    ()=>{
      return [
        <div className='horizontaly-centered'><Stone type="seno">sen(x)</Stone> + <Stone type="cosseno">cos(x)</Stone></div>,
        "sen(x) cos(x)"
      ];
    },
    ()=>{
      return [
        <div className='horizontaly-centered'><Stone type="cosseno">cos(x)</Stone> <Stone type="seno">-sen(x)</Stone></div>,
        "cos(x) -sen(x)"
      ];
    },
    ()=>{
      return [
        <div className='horizontaly-centered'><Stone type="seno">-sen(x)</Stone> <Stone type="cosseno">cos(x)</Stone></div>,
        "-sen(x) cos(x)"
      ];
    },
    ()=>{
      return [
        <div className='horizontaly-centered'><Stone type="cosseno">cos(x)</Stone>  <Stone type="seno">-sen(x)</Stone></div>,
        "cos(x) -sen(x)"
      ];
    },
    ()=>{
      return [
        <div className='horizontaly-centered'><Stone type="seno">sen(x)</Stone> <Stone type="cosseno">cos(x)</Stone></div>,
        "sen(x) cos(x)"
      ];
    }
  ];

let last_derivative = "";

function App(props) {
  let faseValidaMaisProxima = 0;

  if (!fasesValidas.includes(props.phase)){
    for (let i = 0; i < fasesValidas.length; i++){
      
      if (props.phase < fasesValidas[i]){
        break;
      }
      
      faseValidaMaisProxima = fasesValidas[i];
    }
  }
  else{
    faseValidaMaisProxima = props.phase;
  }
  

  const [phase, setPhase] = useState(faseValidaMaisProxima);

  function passPhase(is_last = false){
    let new_phase = phase + 1;
    setPhase(new_phase);
    cookies.setCookie("phase", new_phase, 30);

    if (is_last !== "0"){
      last_derivative = is_last;
    }
  }

  function onReset(){
    setPhase(0);
  }

  function changePhase(newPhase){
    setPhase(parseInt(newPhase));
    cookies.setCookie("phase", newPhase, 30);
  }

  switch (phase){
    case 0:
      return (<StartScreen onContinue={passPhase} onReset={onReset} changePhase={changePhase}/>);
    case 100:
      return (<Final onReset={onReset} changePhase={changePhase}/>)
    default:
      return (<Fases phase={phase} changePhase={changePhase} onReset={onReset} onContinue={passPhase} target={generators[phase]()}/>);
  }
}

export default App;
