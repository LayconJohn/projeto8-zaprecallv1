function BotoesOpcao() {
    return (
        <div className="opcoes">
            <div className="vermelho">Não lembrei</div>
            <div className="amarelo">Quase não lembrei</div>
            <div className="verde">Zap!</div>
        </div>
    )
}

export default function Flashcard(props) {
    //logic
    const flashcards = [
        {
            texto: 'Pergunta 1',
            pergunta: "O que é JSX?",
            resposta: 'Uma extensão de linguagem do JavaScript',
            classe: "flashcard",
            icone: 'play-outline',
            selecionado: false
        },
        {
            texto: 'Pergunta 2',
            pergunta: "O React é __",
            resposta: 'uma biblioteca JavaScript para construção de interfaces',
            classe: "flashcard",
            icone: 'play-outline',
            selecionado: false
        },
        {
            texto: 'Pergunta 3',
            pergunta: "Componentes devem iniciar com __",
            resposta: 'letra maiúscula',
            classe: "flashcard",
            icone: 'play-outline',
            selecionado: false
        },
        {
            texto: 'Pergunta 4',
            pergunta: "Podemos colocar __ dentro do JSX",
            resposta: 'expressões',
            classe: "flashcard",
            icone: 'play-outline',
            selecionado: false
        },
        {
            texto: 'Pergunta 5',
            pergunta: "O ReactDOM nos ajuda __",
            resposta: 'interagindo com a DOM para colocar componentes React na mesma',
            classe: "flashcard",
            icone: 'play-outline',
            selecionado: false
        },
        {
            texto: 'Pergunta 6',
            pergunta: "Usamos o npm para __",
            resposta: 'gerenciar os pacotes necessários e suas dependências',
            classe: "flashcard",
            icone: 'play-outline',
            selecionado: false
        },
        {
            texto: 'Pergunta 7',
            pergunta: "Usamos props para __",
            resposta: 'passar diferentes informações para componentes',
            classe: "flashcard",
            icone: 'play-outline',
            selecionado: false
        },
        {
            texto: 'Pergunta 8',
            pergunta: "Usamos estado (state) para __",
            resposta: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente',
            classe: "flashcard",
            icone: 'play-outline',
            selecionado: false
        },
    ];

    //render
    return (

        <main className="deck">
            {flashcards.map((card, index) => {
                return <div className={card.classe} key={index}>
                <span>{card.texto}</span>
                <ion-icon name={card.icone}></ion-icon>
            </div>})}
        </main>

    )
}