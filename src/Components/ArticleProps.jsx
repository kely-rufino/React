import "./Article.css"


export const ArticleProps = (props) => {
    console.log(props)
    const classes = props.backgroundColor !== undefined ? ["article", props.backgroundColor].join(" "): "article"
    return (
        <article className={classes}>
            <h1 className={"title"}> {props.title} </h1>
            <h2 className={"subtitle"}> {props.subtitle} </h2>
            <p> {props.content} </p>
        </article>
    )
}
