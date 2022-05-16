import React from "react";

import FrenteFlashcard from "./FrenteFlashcard";
import VersoFlashcard from "./VersoFlashcard";

export default function Flashcard({card, index}) {
    // 
    const [selecionado, setSelecionado] = React.useState(false);
    const [respondido, setRespondido] = React.useState(false);

    //render
    return (
        <div onClick={(() => {return setSelecionado(true)})} className={`flashcard ${card.classe} ${selecionado ? "selecionado" : "nao-selecionado"} ${respondido ? "respondida" : "nao-respondida"}`} key={index}>      
            {selecionado ? 
                <VersoFlashcard pergunta={card.pergunta} resposta={card.resposta} icone='repeat-outline' setRespondido={setRespondido} /> 
                :
                <FrenteFlashcard texto={card.texto} icone='play-outline' />
            }
        </div>
    )
}