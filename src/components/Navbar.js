
import React from "react";
import Flashcards from "./Flashcards";

export default function Navbar() {
    return (
        <>
        <div className="navbar">
            <ion-icon name="flash-outline"></ion-icon>
            <h5>ZapRecall</h5>
        </div>
        <Flashcards />
        </>
    );
}