import Inicio from "./components/Inicio"
import React from "react";
import Flashcards from "./components//Flashcards";



export default function App() {
    const [mostrarFlashcard, setMostrarFlashcard] = React.useState(false);

    return (
        <>
            { mostrarFlashcard ? <Flashcards /> : <Inicio setMostrarFlashcard={setMostrarFlashcard}/>}
        </>
    );
}