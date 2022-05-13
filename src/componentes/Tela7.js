export default function Tela7(){
    return (
        <div className="fundo inicial  oculto">
        <header className="titulo logo">
            <img  src="https://s3-alpha-sig.figma.com/img/e6be/467f/fb389e27e5843720979bbb7f3e94e660?Expires=1653264000&Signature=IRCOuMPhZ-lRwVBuOoZoDD6nhf7vFefceaAZ7WKo64NYGAV4ZjZUmAyb3u9yybGDW6Cs2Zj8wG1myo8sRZ8E~JsbLWGcWUMuAxZ6ezzWwFqPbk-xZSf8VqHmebzQ76jX2DCU7Arq9-bs6th3U~6OT1pxo602SFEQGL15lOoIFgI0TdzIxvsmvSme2cnYTiiRkPb5OmWMzrj88dzmeup1CoC0uMvxG9-D1VOcIYkFbo5gf0ztF3880PU7-95RSls09na8m4rAvJM-5xIJfcOpn-7b1HhJ50LKfQccTYHpcacZU9gghqhYxN90HGo3j87BjJzaKqdGAnnmt87L~kabNg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
            <h1 >ZapRecall</h1>
        </header>
        <main className="deck feito">
        <div className="flashcard quase-errada respondida ">
                <span>Pergunta 1</span>
                <ion-icon name="help-circle"></ion-icon>
            </div>
            <div className="flashcard quase-errada respondida ">
                <span>Pergunta 2</span>
                <ion-icon name="help-circle"></ion-icon>
            </div>
            <div className="flashcard quase-errada respondida ">
                <span>Pergunta 3</span>
                <ion-icon name="help-circle"></ion-icon>
            </div>
            <div className="flashcard errada respondida ">
                    <span>Pergunta 4</span>
                    <ion-icon name="close-circle"></ion-icon>
                </div>
            <div className="flashcard certa respondida ">
                <span>Pergunta 5</span>
                <ion-icon name="checkmark-circle"></ion-icon>
            </div>
            <div className="flashcard errada respondida ">
                    <span>Pergunta 6</span>
                    <ion-icon name="close-circle"></ion-icon>
                </div>
            <div className="flashcard certa respondida ">
                <span>Pergunta 7</span>
                <ion-icon name="checkmark-circle"></ion-icon>
            </div>
            <div className="flashcard quase-errada respondida ">
                <span>Pergunta 8</span>
                <ion-icon name="help-circle"></ion-icon>
            </div>
        </main>
        <footer className="acertos finalizado">
            <span> 
                <img src="https://s3-alpha-sig.figma.com/img/992f/92b2/9d526850af1db6888736e82fba3b4c1d?Expires=1653264000&Signature=J3AtGCLvZo6qg15QD-7hu2W9CVRx3jt9IBnuinaFeIYsQCIvyPyZwrnTc5l-s7g6kOAEBwfKnVBDTNWJSlxn9tgjUvPO0TGlvRnbmVWWJvROJw2hKpRDS4DTgUSQHTVeo9f23PWvG~nepbxJ4XW-a26uANS0fHgbOGQY01skqUCrBHBsUM2m2h~48osCALf~tVcw8osVF0Hta1ymEqDZ~CChsoh~QSVbFQgMJa8OXXUj2McNp298YlBHsYcl4DxrSGVqbZFfxexdK2G2Vv7dOgixhCEA~2jA6VdI5qTSUm6NOC8D7km3fmRjEzMzKvm1nsjVp68HNIt9NyqmhzZMpw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
                <h5>Putz...</h5> 
            </span>
            <p>Ainda faltam alguns...Mas não desanime!</p>
            <div className="resultado">
                <div className="quase-errada"> <ion-icon name="help-circle"></ion-icon> </div>
                <div className="quase-errada"> <ion-icon name="help-circle"></ion-icon> </div>
                <div className="quase-errada"> <ion-icon name="help-circle"></ion-icon> </div>
                <div className="errada" > <ion-icon  name="close-circle"></ion-icon></div>
                <div className="certa"> <ion-icon name="checkmark-circle"></ion-icon> </div>
                <div className="errada" > <ion-icon  name="close-circle"></ion-icon></div>
                <div className="certa"> <ion-icon name="checkmark-circle"></ion-icon> </div>
                <div className="quase-errada"> <ion-icon name="help-circle"></ion-icon> </div>
            </div>
        </footer>
    </div>

    )
}