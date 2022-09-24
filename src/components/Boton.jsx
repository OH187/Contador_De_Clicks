import React from "react";
import '../stylesheets/Boton.css';

export function Boton({texto, esBotonDeClick, manejarClick}) { //Esta sintaxis se llama de destructuraccion sin tener esto: (props) y {props.texto}
    return (
        <button className={ esBotonDeClick ? 'boton-click' : 'boton-reiniciar'} onClick={manejarClick}>
            {texto}
        </button>
    );
}
