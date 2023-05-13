import GameCard from "../GameCard"



export default function MyGames ({games, images, gameinfo}) {
  return (
    
    <>
      <h1>My Games</h1>
      {games?.map((p,i) => (<GameCard key={i} gameinfo={p} images={images[i]}/> ))}
    </>
  )
}