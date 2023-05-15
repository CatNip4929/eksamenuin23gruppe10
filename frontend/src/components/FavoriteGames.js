import { useEffect, useState } from "react"
import { fetchUserLibrary } from "../lib/sanity/userServices"
import GameCard from "./GameCard"


export default function ({user, gameinfo}) {
    const [userLib, setUserLibrary] = useState()
    //fetch for alle spill
    const getUserLib = async () => {
    const data = await fetchUserLibrary(user.user_mail)
    // console.log(data)
    setUserLibrary(data)
    }
    
    useEffect (() => {
       getUserLib(user[0]) 
    }, [user[0]] )
    return(
      
        <>
      <h1>My favorites</h1>
      {userLib?.map((user) => user.favorites?.map((favorite) => (<GameCard key={favorite.game} gameinfo={favorite.game}/>)))}
        </>
    )
}
{/* <GameCard key={i} gameinfo={p} /> */}
// {userLib?.map((p,i) => (console.log(userLib[i].favorites[i].game)))}