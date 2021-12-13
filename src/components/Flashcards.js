import React from "react";

export default function Flashcards() {
    const [contador, setContador] = React.useState(0);

    const deck = [
        { pergunta: "O que é JSX?", resposta: "Uma extensão de linguagem do JavaScript" },
        { pergunta: "O React é __", resposta: "uma biblioteca JavaScript para construção de interfaces" },
        { pergunta: "Componentes devem iniciar com __", resposta: "letra maiúscula" },
        { pergunta: "Podemos colocar __ dentro do JSX", resposta: "expressões" },
        { pergunta: "O ReactDOM nos ajuda __ ", resposta: "interagindo com a DOM para colocar componentes React na mesma" },
        { pergunta: "Usamos o npm para __ ", resposta: "gerenciar os pacotes necessários e suas dependências" },
        { pergunta: "Usamos props para __ ", resposta: "passar diferentes informações para componentes " },
        { pergunta: "Usamos estado (state) para __", resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }  
    ];

    return (
        <div className="flashcard">
            <div className="deck">{contador+1}/{deck.length}</div>
            <h1 className="pergunta">{deck[0].pergunta}</h1>
            <ion-icon name="return-up-back-outline"></ion-icon>
        </div>
    )
}