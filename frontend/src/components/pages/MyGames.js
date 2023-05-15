import GameCard from "../GameCard"



export default function MyGames ({games, gameinfo}) {
  return (
    
    <>
      <h1 className="center-title">My Games</h1>
      {games?.map((p,i) => (<GameCard key={i} gameinfo={p}/> ))}
    </>
  )
}