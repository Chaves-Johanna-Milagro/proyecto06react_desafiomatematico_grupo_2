import React from 'react';
import { useState } from "react";

function PantallaDesafio(){

  const [num1,setNum1] = useState(0);
  const [num2,setNum2] = useState(0);

  const [operador,setOperador] = useState('+');

  const [answer,setAnswer] = useState('');
  const [result,setResult] = useState('');

  //gerera una operacion matematica
  const generarProblema = () => {

    //el Math.ramdom genera un float entre el 0 y 1, entonces al multiplicarlo x 10 genera nums entre 0 y 9
    const newNum1 = Math.floor(Math.random() * 10) + 1;
    const newNum2 = Math.floor(Math.random() * 10) + 1;
    const isAddition = Math.random() < 0.5; //hara que la eleccion de la operacion sea random

    //el ? es como un if-else 
    //si isAddition es verdadero el valor de los numeros se mantiene
    //si es falso el num1 toma el valor mas grande de entre los dos (Math.max(newNum1,newNum2)) 
    //y settea al num2 como el valor mas pequeño entre los dos (Math.min(newNum1,newNum2)) 
    setNum1(isAddition ? newNum1 : Math.max(newNum1,newNum2));
    setNum2(isAddition ? newNum2 : Math.min(newNum1,newNum2));

    //si es verdadero se realiza una suma, sino hace una resta 
    setOperador(isAddition ? '+' : '-');

    setAnswer('');
    setResult('');
  }

  const verificarResultado = () => {
    const correct = operador === '+' ? num1 + num2 : num1 - num2;
    if(parseInt(answer) === correct){
      setResult('Correctoo!!');
    }else {
      setResult('Incorrecto!!');
    }
  };

    return(
        <div>
        <h1>DESAFÍO MATEMÁTICO</h1>
        <h2>Resuelve el problema:</h2>
        <h2>{num1} {operador} {num2}</h2>
        <input value={answer} 
        onChange={(e)=> setAnswer(e.target.value)}
        placeholder="Escriba el resultado"></input><br></br>
        <button onClick={verificarResultado}>Verificar</button>
        <h3>{result}</h3>
        <button onClick={generarProblema}>Siguiente</button>
      </div>
    )
}

export default PantallaDesafio;