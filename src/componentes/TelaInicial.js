import React from "react";

import Tela1 from "./Tela1";
import Tela2 from "./Tela2";

export default function TelaInicial() {
    //Estado
    const [botao, setBotao] = React.useState(" ");
    const [status, setStatus] = React.useState("")


    //render
    return (
        <>
            <Tela1 status={status}/>
            <Tela2 />
           
        </>

    )
}