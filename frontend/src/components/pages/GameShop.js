import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { FetchGame } from "../../lib/sanity/gameServices"


export default function GameShop () {

  const {slug} = useParams()

  const [games, setGames] = useState(null)

  const getGames = async (slug) => {
    const data = await FetchGame(slug)
    setGames(data[0])
  }


  useEffect(() => {
      getGames(slug)
  }, [slug])
  return (
    <>
   <article>
    <img style={{maxWidth: "200px"}} src={games?.imageURL} alt={`bilde av ${games?.game_title}`}/>
    <h2>{games?.game_title}</h2>
    <p>Genre: {games?.game_tags}</p>
    <p>Developers: {games?.game_developers}</p>
    <p>Publisher: {games?.game_publisher}</p>
    <p>Release date: {games?.game_release}</p>
    <p>om spillet: {games?.game_plot}</p>
   </article>

    </>
  )
}