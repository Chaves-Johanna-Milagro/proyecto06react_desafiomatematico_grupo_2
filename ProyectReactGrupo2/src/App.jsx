import { useState } from 'react'
import './App.css'
import PantallaInicio from './components/PantallaInicio';
import PantallaDesafio from './components/PantallaDesafio';

function App() {

  const [pantalla, setPantalla] = useState(<><PantallaInicio />
  <button onClick={() => setPantalla((pantalla) => pantalla = <PantallaDesafio />)}>EMPEZAR</button></>); 
  //Se cambia la pantalla al hacer clic
  return (
    <>
      <div>
      {pantalla}
      </div>
    </>
  )
}

export default App;
