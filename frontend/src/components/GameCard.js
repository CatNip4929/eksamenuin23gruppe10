import { Link } from "react-router-dom";


export default function GameCard ({id, gameinfo, images}) {
    return(
        <article>
            <Link to={gameinfo.slug.current}><img src={images?.imageURL} style={{maxWidth: "200px"}}  alt={`produktbilde av ${gameinfo?.game_title}`}/></Link>
            <h2>{gameinfo?.game_title}</h2>
            <p>Genre: {gameinfo?.game_tags}</p>
            
        </article>
    )
}