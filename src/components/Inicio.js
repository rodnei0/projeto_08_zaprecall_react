import Navbar from "./Navbar"
import React from "react";

export default function Inicio(props) {

    return (
        <>  
        {/* <Navbar /> */}
        <div className="telaInicial">
            <ion-icon name="flash-outline"></ion-icon>
            <h1>ZapRecall</h1>
            <div className='praticar' onClick={() => props.setMostrarFlashcard(true)}>
                <h3>Praticar React</h3>
                <ion-icon name="play-forward"></ion-icon>
            </div>
        </div>
        </>
    );
}