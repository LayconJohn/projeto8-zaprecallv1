import React from "react";

export default function Flashcard({classe, id, children}) {
    // 
    const [selecionado, setSelecionado] = React.useState("false");

    //render
    return (
        <div onClick={(() => {return setSelecionado("true")})} className={`flashcard ${classe} ${selecionado}`} key={id}>
            {children}
        </div>
    )
}