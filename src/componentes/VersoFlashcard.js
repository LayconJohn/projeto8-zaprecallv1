import BotoesFlashcard from "./BotoesFlashcard"

export default function VersoFlashcard({pergunta, icone}) {
    return (
        <>
            <span>{pergunta}</span>
            <ion-icon name={icone}></ion-icon>
            <BotoesFlashcard />
        </>
    )   
}