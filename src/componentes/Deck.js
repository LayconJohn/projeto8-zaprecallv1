import Flashcard from "./Flashcard";

export default function Deck({flashcards}) {
    return (
        flashcards.map((card, index) => <Flashcard card={card} index={index} />)
    )
}