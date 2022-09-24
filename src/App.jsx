import './App.css';
import logo from './image/logo.png'; //Importando la imagen del logo
import { Boton } from './components/Boton';
import Contador from './components/Contador';
import {useState} from 'react';

function App() {

  const [numClick, setNumClick] = useState(0) ; //[obtencion, actualizacion] = useState(inicializador)

  const manejarClick = () => {
      setNumClick(numClick + 1); //Actualizamos el valor del click en 1 cada vez de se presione
  };

  const reiniciarContador = () => {
      setNumClick(0);
  };

  return (
    <div className="App">
      <div className='logo-contenedor'>
      <img className='logo' src= {logo} alt='Imagen del logo' />
      </div>

      <Contador numClick={numClick} />

      <div className='contenedor-botones'>
      <Boton 
      texto='Click'
      esBotonDeClick={true}
      manejarClick={manejarClick}
      />

      <Boton 
      texto='Reiniciar'
      esBotonDeClick={false}
      manejarClick={reiniciarContador}
      />
      </div>
      
    </div>
  );
}

export default App;
