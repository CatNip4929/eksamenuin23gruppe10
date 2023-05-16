import { useEffect, useState } from "react"
import { fetchUserLibrary } from "../lib/sanity/userServices"
import GameCard from "./GameCard"


export default function ({user, i}) {
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
          <div className="favorites">
            <h1 className="center-title">My favorites</h1>
            {userLib?.map((user) => user.favorites?.map((favorite, i) => (<GameCard key={i} gameinfo={favorite.game}/>)))}
            </div>
        </>
    )
}
{/* <GameCard key={i} gameinfo={p} /> */}
// {userLib?.map((p,i) => (console.log(userLib[i].favorites[i].game)))}