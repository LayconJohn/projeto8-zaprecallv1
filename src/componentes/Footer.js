import React from "react";

export default function Footer({respondidas}) {

    //render
    return (
        <footer className="acertos">
            <p>{respondidas}/8 CONCLUÍDOS</p>
            <div className="resultado oculto">
                <div className="errada" > <ion-icon  name="close-circle"></ion-icon></div>
                <div className="quase-errada"> <ion-icon name="help-circle"></ion-icon> </div>
                <div className="certa"> <ion-icon name="checkmark-circle"></ion-icon> </div>
            </div>
        </footer>
    )
}