import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchGame } from "../../lib/sanity/gameServices"



export default function GamePage () {

   const {slug} = useParams()


  const [games, setGames] = useState(null)

  const getGames = async (slug) => {
    const data = await fetchGame(slug)
    setGames(data[0])
  }

  useEffect(() => {
      getGames(slug)
  }, [slug])
  
  return (
    
    <>
    <article>
      <h2>{games?.game_title}</h2>
      <img style={{maxWidth: "200px"}} src={games?.imageURL} alt={`produktbilde av ${games?.game_title}`}/>
      <p>Plot: {games?.game_plot}</p>
      <p>Genre: {games?.game_tags}</p>
      <p>Release date: {games?.game_release}</p>
      <p>Developers: {games?.game_developers}</p>
      <p>Publisher: {games?.game_publisher}</p>
      <p></p>
      <p></p>
    </article>
    </>
  )
}