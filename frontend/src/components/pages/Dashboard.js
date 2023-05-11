import GameCard from "../GameCard"

export default function Dashboard ({games}) {
  return (
    <>
      <h1>Dashboard</h1>
      {games?.map((p,i) => (<GameCard key={i} gameinfo={p}/> ))}
    </>
  )
}