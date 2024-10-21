import React from 'react';
import { useState } from "react";

function PantallaDesafio(){

  const [num1,setNum1] = useState(0);
  const [num2,setNum2] = useState(0);

  const [operador,setOperador] = useState('+');

  const [answer,setAnswer] = useState('');
  const [result,setResult] = useState('');
  
  const [puntaje,setPuntaje] = useState(0);
  const [ejercicios,setEjercicios] = useState(5);
  const [mensaje,setMensaje]= useState('');
  

  //gerera una operacion matematica
  const generarProblema = () => {
	  
	  //// comprueba la cantidad de ejercicios pendientes y la puntuación ///////
	  
	if (ejercicios <= 0 &&   puntaje >=3){
		setMensaje('Ganó'); // Para ser remplazada por PantallaLogro
	}
	else if (ejercicios <= 0 &&   puntaje <3){
		setMensaje('Perdió'); // Para ser remplazada por PantallaDerrota
		
	}	else {
		
		

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
    setPuntaje(puntaje);
    setEjercicios(ejercicios);
    setMensaje(mensaje);
    
    };  
  }

  const verificarResultado = () => {
    const correct = operador === '+' ? num1 + num2 : num1 - num2;
    if(parseInt(answer) === correct){
      setResult('Correctoo!!');
      setPuntaje (puntaje +1); // aumenta puntaje
      setEjercicios (ejercicios -1) // disminuye la cantidad de ejercicios pendientes 
      
    }else {
      setResult('Incorrecto!!');
      setEjercicios (ejercicios -1)
    }
  };
  

	
    return(
        <div>
        <h1>DESAFÍO MATEMÁTICO</h1>
        <h2>Resuelve el problema:</h2>
        <h3>Ejercicios Pendientes: {ejercicios}</h3>
        <h3>Puntaje: {puntaje}</h3>
        <h2>{num1} {operador} {num2}</h2>
        <input value={answer} 
        onChange={(e)=> setAnswer(e.target.value)}
        placeholder="Escriba el resultado"></input><br></br>
        <button onClick={verificarResultado}>Verificar</button>
        <h3>{result}</h3>
        <button onClick={generarProblema}>Siguiente</button>
        <h3>{mensaje}</h3>
      </div>
    )
}

export default PantallaDesafio;
