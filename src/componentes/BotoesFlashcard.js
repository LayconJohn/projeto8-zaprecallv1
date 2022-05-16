import React from "react";

export default function BotoesFlashcard({mostraResposta, setRespondido}) {
    //Estado
    const [respondidas, setRespondidadas] = React.useState(0);

    //logic
     function verificarResposta() {
        setRespondido(true);
        setRespondidadas(respondidas + 1)
     }

    //render
    return (
        <div className={`opcoes ${mostraResposta}`}>
            <div onClick={verificarResposta} className="vermelho">Não lembrei</div>
            <div onClick={verificarResposta} className="amarelo">Quase não lembrei</div>
            <div onClick={verificarResposta} className="verde">Zap!</div>
        </div>
    )
}