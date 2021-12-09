import "./Article.css"


export const ArticleProps = (props) => {
    const classes = props.backgroundColor !== undefined ? ["article", props.backgroundColor].join(" "): "article"
    function printProps (){
        return console.log(props.title, props.subtitle)
    }
    return (
        <article className={classes}>
            <h1 className={"title"}> {props.title} </h1>
            <h2 className={"subtitle"}> {props.subtitle} </h2>
            <p> {props.content} </p>
            <button onClick = {printProps}>
                Click me!
            </button>
        </article>
    )
}
