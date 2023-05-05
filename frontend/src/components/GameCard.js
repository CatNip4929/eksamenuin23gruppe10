import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchImages } from "../lib/sanity/gameServices";

export default function GameCard ({games, gameinfo}) {
    

    const [images, setImages] = useState(null)
console.log(images)
    const getImages = async () => {
        const data = await fetchImages()
        setImages(data)
      }

      useEffect(() => {
        getImages()
      },[])

    return(
        <article>
            <Link to={gameinfo.slug.current}><img src={images?.imageURL} style={{maxWidth: "200px"}}  alt={`produktbilde av ${gameinfo?.game_title}`}/></Link>
            <h2>{gameinfo?.game_title}</h2>
            <p>Genre: {gameinfo?.game_tags}</p>
            
        </article>
    )
}