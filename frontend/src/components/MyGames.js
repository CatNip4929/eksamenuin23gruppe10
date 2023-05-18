import { useEffect, useState } from "react"
import { fetchUserGameCount, fetchUserGameLibrary } from "../lib/sanity/userServices"
import GameCard from "./GameCard"
import { NavLink } from "react-router-dom"

export default function MyGames({user, i}) {
    const [userLib, setUserLibrary] = useState()
    const [userCount, setUserCount] = useState()
    //fetch for alle spill
    const getUserLib = async () => {
    const data = await fetchUserGameLibrary (user.user_mail)
    setUserLibrary(data[0])
    //console.log(data[0])
    }

    const getUserCount = async () => {
        const data = await fetchUserGameCount (user.user_mail)
        setUserCount (data[0])
    }
    
    useEffect (() => {
       getUserLib(user[0]) 
       getUserCount(user[0])
    }, [user[0]] )
    return(
      
        <>
          <NavLink to="/mygames"><h2 className="center-title">My Games ({userCount?.gameCount})</h2></NavLink>
            {userLib?.games.map((libraryItem, i) => (<GameCard key={i} gameinfo={libraryItem.game} showGenre={true} gametime={libraryItem.gametime}/>))}
        </>
    )
}

//{userLib?.map((user) => user.games?.map((libItem, i) => (<GameCard key={i} gameinfo={libItem.game} showGenre={true} gameTime={libItem.game_time}/>)))}