export default function Tela6(){
    return (
        <div className="fundo inicial oculto">
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
            <div className="flashcard certa respondida ">
                <span>Pergunta 4</span>
                <ion-icon name="checkmark-circle"></ion-icon>
            </div>
            <div className="flashcard certa respondida ">
                <span>Pergunta 5</span>
                <ion-icon name="checkmark-circle"></ion-icon>
            </div>
            <div className="flashcard certa respondida ">
                <span>Pergunta 6</span>
                <ion-icon name="checkmark-circle"></ion-icon>
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
                <img src="https://s3-alpha-sig.figma.com/img/b2e0/45a4/d6dad67243244cdc8512bad8cc08afaf?Expires=1653264000&Signature=RqqC2aHfqsPLbNxB6WsEGXfR58rlOMWRMagf23oQXG5SlwYXllhVV8Iiy2CbEtcA~taSyumApukTS0Di9qsLoRWSoKi2so~Kb5qNPmdcUIa3h7oUuxEOzxiS2rtQRA5ws8E88eoSbk-XTIIaII9MiPgBE63BR2adKw7jf-y2K3j5sTsnDGlwqdMtm45cm3UYBec2KxGMekbzZlMZY3y9p8rmDi4pp6Zy4Rf88FwJNU0AD6FJRA1FVPqeVlCJeT5UmuPOBqGURM1oA-JWfc4CWYA9zeYtPqeWFPe0AG7W3dmCxiHywkgf2bZwznJnupQJ7Y79ZQHttsCdt0y5HuXC7w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
                <h5>Parabéns!</h5> 
            </span>
            <p>Você não esqueceu de nenhum flashcard!</p>
            <div className="resultado">
                <div className="quase-errada"> <ion-icon name="help-circle"></ion-icon> </div>
                <div className="quase-errada"> <ion-icon name="help-circle"></ion-icon> </div>
                <div className="quase-errada"> <ion-icon name="help-circle"></ion-icon> </div>
                <div className="certa"> <ion-icon name="checkmark-circle"></ion-icon> </div>
                <div className="certa"> <ion-icon name="checkmark-circle"></ion-icon> </div>
                <div className="certa"> <ion-icon name="checkmark-circle"></ion-icon> </div>
                <div className="certa"> <ion-icon name="checkmark-circle"></ion-icon> </div>
                <div className="quase-errada"> <ion-icon name="help-circle"></ion-icon> </div>
            </div>
        </footer>
    </div>

    )
}