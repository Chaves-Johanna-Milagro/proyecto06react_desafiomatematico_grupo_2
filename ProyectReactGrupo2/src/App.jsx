import { useState } from 'react';
import PantallaInicio from './components/PantallaInicio';
import PantallaDesafio from './components/PantallaDesafio';
import './styles/App.css';

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
