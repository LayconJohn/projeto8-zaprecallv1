export default function Header(props) {
    return (
        <header className="titulo logo">
            <img  src={props.link}/>
            <h1 >ZapRecall</h1>
        </header>
    )
}