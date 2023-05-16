import { Link } from "react-router-dom";
import { client } from "../lib/sanity/client";
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

function urlFor(source) {
    return builder.image(source)
}


export default function GameCard ({id, gameinfo, game}) {
    return(
        <article>
            <ul className="games-container">
                <li className="game-container card-container">
                        <Link to={gameinfo?.slug.current}><img className="gamecard-img" src={urlFor(gameinfo?.background_image).url()} style={{maxWidth: "200px"}}  alt={`produktbilde av ${gameinfo?.name}`}/></Link>
                        <h2 className="center-title">{gameinfo?.name}</h2>
                        <p>Genre: {gameinfo?.game_categories?.map(category => category.category_title).slice(0, 2).join(", ")}</p>
                        <p>Game Time {gameinfo?.game_time}</p>
                        <img src={game?.background_image} style={{maxWidth: "200px"}} alt={game?.name} />
                        <h2 className="center-title">{game?.name}</h2>
                        <p>{game?.genres.map((genre) => genre?.name).join(", ")}</p>
                </li>
            </ul>
    </article>
    ) 
}