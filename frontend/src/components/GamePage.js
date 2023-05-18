import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchGame } from "../lib/sanity/gameServices"
import GameTag from "./GameTag"


export default function GamePage () {
  //Henter ulik info fra fethGame der vi har brukt en groq-spørring for å hente ut info til spilldatabasen i sanity
  const {slug} = useParams()
  const [games, setGames] = useState(null)

  const getGames = async (slug) => {
    const data = await fetchGame(slug)
    // console.log(data)
    setGames(data[0])
  }

  useEffect(() => {
      getGames(slug)
  }, [slug])
  
  return (
    
    <>
    <article className="game-info">
      <h2>{games?.name}</h2>
      <img style={{maxWidth: "200px"}} src={games?.imageURL} alt={`produktbilde av ${games?.game_title}`}/>
      <p>Plot: {games?.game_plot}</p>
      {games?.game_categories.length > 0 && (
      <p>Genre: {games?.game_categories.map(category => category.category_title).join(", ")}</p>
    )}
      <p>Rating : {games?.game_rating}</p>
      <p>Release date: {games?.game_release}</p>
      <p>Developers: {games?.game_developers}</p>
      <p>Publisher: {games?.game_publisher}</p>
      <p>Platforms: {games?.game_platforms}</p>
      <p>Buy options: <a href={games?.game_stores}>{games?.game_stores}</a></p>
    </article>
    <GameTag categories={games?.game_categories || []} />
    </>
  )
}

