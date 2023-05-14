import { useEffect, useState } from "react"
import { fetchUserLibrary } from "../lib/sanity/userServices"
import GameCard from "./GameCard"

export default function (games, gameinfo, images) {
    const [favorite, setUserLibrary] = useState()

    //fetch for alle spill
  const getfavorites = async () => {
    const data = await fetchUserLibrary()
    console.log()
    setUserLibrary(data)
    }

    useEffect (() => {
       getfavorites() 
    }, [] )
    return(
        <>
      <h1>My favorites</h1>
      {games?.map((p,i) => (<GameCard key={i} gameinfo={p} images={images[i]}/> ))}
        </>
    )
}