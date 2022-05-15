function BotoesOpcao() {
    return (
        <div className="opcoes">
            <div className="vermelho">Não lembrei</div>
            <div className="amarelo">Quase não lembrei</div>
            <div className="verde">Zap!</div>
        </div>
    )
}

function FrenteFlashcard({texto, icone}) {
    return (
        <>
            <span>{texto}</span>
            <ion-icon name={icone}></ion-icon>
        </>
    )
}

function VersoFlashcard({pergunta, icone}) {
    return (
        <>
            <span>{pergunta}</span>
            <ion-icon name={icone}></ion-icon>
        </>
    )
}

const flashcards = [
    {
        texto: 'Pergunta 1',
        pergunta: "O que é JSX?",
        resposta: 'Uma extensão de linguagem do JavaScript',
        classe: "nao-respondida",
        icone: 'play-outline',
        selecionado: false
    },
    {
        texto: 'Pergunta 2',
        pergunta: "O React é __",
        resposta: 'uma biblioteca JavaScript para construção de interfaces',
        classe: "nao-respondida",
        icone: 'play-outline',
        selecionado: false
    },
    {
        texto: 'Pergunta 3',
        pergunta: "Componentes devem iniciar com __",
        resposta: 'letra maiúscula',
        classe: "nao-respondida",
        icone: 'play-outline',
        selecionado: false
    },
    {
        texto: 'Pergunta 4',
        pergunta: "Podemos colocar __ dentro do JSX",
        resposta: 'expressões',
        classe: "nao-respondida",
        icone: 'play-outline',
        selecionado: false
    },
    {
        texto: 'Pergunta 5',
        pergunta: "O ReactDOM nos ajuda __",
        resposta: 'interagindo com a DOM para colocar componentes React na mesma',
        classe: "nao-respondida",
        icone: 'play-outline',
        selecionado: false
    },
    {
        texto: 'Pergunta 6',
        pergunta: "Usamos o npm para __",
        resposta: 'gerenciar os pacotes necessários e suas dependências',
        classe: "nao-respondida",
        icone: 'play-outline',
        selecionado: false
    },
    {
        texto: 'Pergunta 7',
        pergunta: "Usamos props para __",
        resposta: 'passar diferentes informações para componentes',
        classe: "nao-respondida",
        icone: 'play-outline',
        selecionado: false
    },
    {
        texto: 'Pergunta 8',
        pergunta: "Usamos estado (state) para __",
        resposta: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente',
        classe: "nao-respondida",
        icone: 'play-outline',
        selecionado: false
    },
];

export default function Flashcard() {
    //logic


    //render
    return (
        <main className="deck">
            {flashcards.map((card, index) => {
                return <div className={`flashcard ${card.classe}`} key={index}>
                    {card.selecionado === false ? <FrenteFlashcard texto={card.texto} icone='play-outline' /> : <VersoFlashcard pergunta={card.pergunta} icone='repeat-outline' />}
                </div>})}
        </main>
    )
}