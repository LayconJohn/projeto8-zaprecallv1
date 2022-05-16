export default function BotoesFlashcard({pergunta}) {

    return (
        <div className={`opções ${pergunta}`}>
            <div className="vermelho">Não lembrei</div>
            <div className="amarelo">Quase não lembrei</div>
            <div className="verde">Zap!</div>
        </div>
    )
}