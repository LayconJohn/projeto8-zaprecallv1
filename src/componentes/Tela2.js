import React from "react";

import Header from "./Header";
import Flashcard from "./Flashcard";
import Footer from "./Footer";
import FrenteFlashcard from "./FrenteFlashcard";
import VersoFlashcard from "./VersoFlashcard";
import Main from "./Main";



export default function Tela2({selecionado}) {
    //Estado
    const [perguntaAtiva, setPerguntaAtiva] = React.useState("oculto");

    let flashcards = [
        {
            id: '0',
            texto: 'Pergunta 1',
            pergunta: "O que é JSX?",
            resposta: 'Uma extensão de linguagem do JavaScript',
            classe: "nao-respondida",
            icone: 'play-outline',
            selecionado: selecionado
        },
        {
            id: '1',
            texto: 'Pergunta 2',
            pergunta: "O React é __",
            resposta: 'uma biblioteca JavaScript para construção de interfaces',
            classe: "nao-respondida",
            icone: 'play-outline',
            selecionado:  selecionado
        },
        {
            id: '2',
            texto: 'Pergunta 3',
            pergunta: "Componentes devem iniciar com __",
            resposta: 'letra maiúscula',
            classe: "nao-respondida",
            icone: 'play-outline',
            selecionado: selecionado
        },
        {
            id: '3',
            texto: 'Pergunta 4',
            pergunta: "Podemos colocar __ dentro do JSX",
            resposta: 'expressões',
            classe: "nao-respondida",
            icone: 'play-outline',
            selecionado:  selecionado
        },
        {
            id: '4',
            texto: 'Pergunta 5',
            pergunta: "O ReactDOM nos ajuda __",
            resposta: 'interagindo com a DOM para colocar componentes React na mesma',
            classe: "nao-respondida",
            icone: 'play-outline',
            selecionado:  selecionado
        },
        {
            id: '5',
            texto: 'Pergunta 6',
            pergunta: "Usamos o npm para __",
            resposta: 'gerenciar os pacotes necessários e suas dependências',
            classe: "nao-respondida",
            icone: 'play-outline',
            selecionado:  selecionado
        },
        {
            id: '6',
            texto: 'Pergunta 7',
            pergunta: "Usamos props para __",
            resposta: 'passar diferentes informações para componentes',
            classe: "nao-respondida",
            icone: 'play-outline',
            selecionado:  selecionado
        },
        {
            id: '7',
            texto: 'Pergunta 8',
            pergunta: "Usamos estado (state) para __",
            resposta: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente',
            classe: "nao-respondida",
            icone: 'play-outline',
            selecionado:  selecionado
        },
    ];
 
    // logic
    function comparador() {
        return Math.random()-0.5
        //Math.floor(Math.random() * (index + 1));
        //[flashcards[index], flashcards[j]] = [flashcards[j], flashcards[index]];
    }

    //render
    return (
        <div className={`fundo inicial`}>
            <Header link="https://s3-alpha-sig.figma.com/img/e6be/467f/fb389e27e5843720979bbb7f3e94e660?Expires=1653264000&Signature=IRCOuMPhZ-lRwVBuOoZoDD6nhf7vFefceaAZ7WKo64NYGAV4ZjZUmAyb3u9yybGDW6Cs2Zj8wG1myo8sRZ8E~JsbLWGcWUMuAxZ6ezzWwFqPbk-xZSf8VqHmebzQ76jX2DCU7Arq9-bs6th3U~6OT1pxo602SFEQGL15lOoIFgI0TdzIxvsmvSme2cnYTiiRkPb5OmWMzrj88dzmeup1CoC0uMvxG9-D1VOcIYkFbo5gf0ztF3880PU7-95RSls09na8m4rAvJM-5xIJfcOpn-7b1HhJ50LKfQccTYHpcacZU9gghqhYxN90HGo3j87BjJzaKqdGAnnmt87L~kabNg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
            <Main>
            {flashcards.map((card, index) => {
                return <Flashcard classe={card.classe} key={card.id}>
                    {card.selecionado ? 
                    <VersoFlashcard pergunta={card.pergunta} icone='repeat-outline' /> 
                    :
                    <FrenteFlashcard texto={card.texto} icone='play-outline' />
                    }
                </Flashcard>})}
            </Main>
            <Footer />
        </div>
    )
}