import './Article.css';

import {ArticleProps} from "./ArticleProps.jsx";
import {Link} from "./Link";

function Article() {
    return (
        <div className="page">
            <ArticleProps backgroundColor= "blue-bg"
                          title="Lorem ipsum"
                          subtitle="Classic"
                          content="The classic latin passage that just never gets old, enjoy as much (or as little) lorem ipsum as you can handle with our easy to use filler text generator."
            />
            <ArticleProps backgroundColor= "blue-bg"
                          textColor= "blue-text"
                title="Hodor ipsum"
                subtitle="Game of Thrones - Hodor"
                content="Hodor. Hodor hodor, hodor. Hodor hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor; hodor hodor hodor. Hodor. Hodor hodor; hodor hodor - hodor, hodor, hodor hodor. Hodor, hodor. Hodor. Hodor, hodor hodor hodor; hodor hodor; hodor hodor hodor! Hodor hodor HODOR! Hodor hodor... Hodor hodor hodor..."
            />
            <ArticleProps backgroundColor= "blue-bg"
                title="Trump ipsum"
                subtitle="The Apprentice"
                content="Lorem Ipsum is the single greatest threat. We are not - we are not keeping up with other websites. Lorem Ipsum best not make any more threats to your website. It will be met with fire and fury like the world has never seen. Does everybody know that pig named Lorem Ipsum? An ‘extremely credible source’ has called my office and told me that Barack Obama’s placeholder text is a fraud."
            />
            <ArticleProps backgroundColor= "blue-bg"
                title="Hipster Ipsum"
                subtitle="A handcrafted ipsum"
                content="Lorem ipsum dolor amet mustache knausgaard +1, blue bottle waistcoat tbh semiotics artisan synth stumptown gastropub cornhole celiac swag. Brunch raclette vexillologist post-ironic glossier ennui XOXO mlkshk godard pour-over blog tumblr humblebrag. Blue bottle put a bird on it twee prism biodiesel brooklyn. Blue bottle ennui tbh succulents."
            />
            <ArticleProps backgroundColor= "blue-bg"
                title="Zombie Ipsum"
                subtitle="An army of Zombie Ipsum"
                content="Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium."
            />
            <ArticleProps backgroundColor= "blue-bg"
                title="Article title"
                subtitle="Bacon Ipsum - side of eggs and hashbrowns is optional, but recommended."
                content="Bacon ipsum dolor amet short ribs brisket venison rump drumstick pig sausage prosciutto chicken spare ribs salami picanha doner. Kevin capicola sausage, buffalo bresaola venison turkey shoulder picanha ham pork tri-tip meatball meatloaf ribeye. Doner spare ribs andouille bacon sausage. Ground round jerky brisket pastrami shank"
            />
            <Link />
        </div>
    )
}

export default Article;
