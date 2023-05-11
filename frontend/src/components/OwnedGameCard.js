import { Link } from "react-router-dom";

export default function GameCard ({games, gameinfo, showlink}) {
    if (showlink){
        return(
        
            <article>
                <img style={{maxWidth: "200pxe"}} src={games?.imageURL} alt={`produktbilde av ${gameinfo?.game_title}`}/>
                <h2>{gameinfo?.game_title}</h2>
                <p>Genre: {gameinfo?.game_tags}</p>
                
                <Link to={gameinfo.slug.current}>Les mer</Link>
            </article>
        )
    }else{
    return(
        
            <article>
                <img style={{maxWidth: "200pxe"}} src={games?.imageURL} alt={`produktbilde av ${gameinfo?.game_title}`}/>
                <h2>{gameinfo?.game_title}</h2>
                <p>Genre: {gameinfo?.game_tags}</p>
                
                
            </article>
        )
    }
}