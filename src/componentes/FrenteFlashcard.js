export default function FrenteFlashcard({texto, icone, setSelecionado}) {
    return (
        <>
            <span>{texto}</span>
            <ion-icon name={icone}></ion-icon>
        </>
    )
}