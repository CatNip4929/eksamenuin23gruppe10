import GameCard from "../GameCard"

export default function MyGames ({games, images}) {
  return (
    <>
      <h1>GameShop</h1>
      {games?.map((p,i) => (<GameCard key={i} gameinfo={p} images={images[i]}/> ))}
    </>
  )
}