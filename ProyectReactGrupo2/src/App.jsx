import { useState } from 'react'
import './App.css'
import PantallaInicio from './components/PantallaInicio';
import PantallaDesafio from './components/PantallaDesafio';

function App() {

  const [pantalla, setPantalla] = useState(<PantallaInicio />); 
  //Se cambia la pantalla al hacer clic pero el boton no se va xd
  return (
    <>
      <div>{pantalla}
      <button onClick={() => setPantalla((pantalla)=> pantalla=<PantallaDesafio />)}>EMPEZAR</button>
      </div>
    </>
  )
}

export default App;
