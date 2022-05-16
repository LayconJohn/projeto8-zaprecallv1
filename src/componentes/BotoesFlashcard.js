export default function BotoesFlashcard({mostraResposta}) {

    return (
        <div className={`opcoes ${mostraResposta}`}>
            <div className="vermelho">Não lembrei</div>
            <div className="amarelo">Quase não lembrei</div>
            <div className="verde">Zap!</div>
        </div>
    )
}