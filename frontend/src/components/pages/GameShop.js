import GameCard from "../GameCard"

export default function GameShop ({games}) {
  return (
    <>
      <h1>GameShop</h1>
      {games?.map((p,i) => (<GameCard key={i} gameinfo={p}/> ))}
    </>
  )
}