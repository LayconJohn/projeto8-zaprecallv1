import BotoesFlashcard from "./BotoesFlashcard"
import React from "react";

export default function VersoFlashcard({pergunta, resposta, icone}) {
    //logic 
    const [mostraResposta, setMostraResposta] = React.useState("oculto");
    const [ocultaPergunta, setOcultaPergunta] = React.useState(" ");
    //() => {return setMostraResposta(" ")}

    function exibirResposta () {
        setMostraResposta(" ");
        setOcultaPergunta("oculto");
    }
    
    //render
    return (
        <>
            <span onClick={exibirResposta}>{ocultaPergunta === " " ? pergunta : resposta}</span>
            <div className={ocultaPergunta} onClick={exibirResposta}><ion-icon name={icone}></ion-icon></div>
            <BotoesFlashcard mostraResposta={mostraResposta}/>
        </>
    )   
}