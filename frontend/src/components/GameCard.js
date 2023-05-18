import { Link } from "react-router-dom";
import { client } from "../lib/sanity/client";
import imageUrlBuilder from '@sanity/image-url'

//Kilde: https://www.sanity.io/docs/presenting-images
//Kilde: https://www.sanity.io/docs/image-url#usage
//Lar oss genere bilde fra sanity basert på url
const builder = imageUrlBuilder(client)

function urlFor(source) {
    return builder.image(source)
}


export default function GameCard ({id, gameinfo, showGenre, gametime}) {
    return(
        <article>
            <ul className="games-container">
                <li className="game-container card-container">
                        <Link to={"/mygames/"+ gameinfo?.slug.current}><img className="gamecard-img" src={urlFor(gameinfo?.background_image).url()} style={{maxWidth: "200px"}}  alt={`produktbilde av ${gameinfo?.name}`}/></Link>
                        <h2 className="center-title">{gameinfo?.name}</h2>
                       {showGenre? <p>Genre: {gameinfo?.game_categories?.map(category => category.category_title).slice(0, 2).join(", ")}</p> : null}
                        <p>Game Time {gametime}</p>
                </li>
            </ul>
    </article>
    )
}