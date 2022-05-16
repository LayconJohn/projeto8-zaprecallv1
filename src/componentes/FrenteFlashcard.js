export default function FrenteFlashcard({texto, icone}) {
    return (
        <>
            <span>{texto}</span>
            <ion-icon name={icone}></ion-icon>
        </>
    )
}