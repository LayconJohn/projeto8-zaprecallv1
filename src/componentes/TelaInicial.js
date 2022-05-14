import React from "react";

import Tela1 from "./Tela1";
import Tela2 from "./Tela2";

export default function TelaInicial() {
    //Estado
    const [status, setStatus] = React.useState(false)
    //render
    return (
        <>
            {status ? <Tela2 />  : <Tela1 status={status} setStatus={setStatus}/>}
            
            
        </>

    )
}