import "./Article.css"
import {useState} from "react";

export const ArticleProps = ({title, subtitle, content, backgroundColor, textColor}) => {
    const [style, updateStyle] = useState(backgroundColor)
    const classes = style !== undefined ? ["article", style].join(" "): "article";

    const changeColor = () => {
        if(style === backgroundColor){
            updateStyle(textColor)
        } else{
            updateStyle(backgroundColor)
        }
    }

    return (
        <article className={classes}>
            <h1 className={"title"}> {title} </h1>
            <h2 className={"subtitle"}> {subtitle} </h2>
            <p> {content} </p>
            <button onClick={changeColor}>
                Click me!
            </button>
        </article>
    )
}
