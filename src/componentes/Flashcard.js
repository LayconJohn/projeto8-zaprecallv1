export default function Flashcard({setSelecionado, classe, index, children}) {

    //render
    return (
        <div onClick={() => {return setSelecionado(true)}} className={`flashcard ${classe}`} key={index}>
            {children}
        </div>
        
    )
}