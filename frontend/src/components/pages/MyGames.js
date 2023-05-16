import { useEffect, useState } from "react"
import { fetchUserGameLibrary  } from "../../lib/sanity/userServices"
import GameCard from ".././GameCard"

export default function MyGames({user, i}) {
    const [userLib, setUserLibrary] = useState()
    //fetch for alle spill
    const getUserLib = async () => {
    const data = await fetchUserGameLibrary (user.user_mail)
    setUserLibrary(data[0])
    //console.log(data[0])
    }
    
    useEffect (() => {
       getUserLib(user[0]) 
    }, [user[0]] )
    return(
      
        <>
            <h1 className="center-title">My Games</h1>
            {userLib?.games.map((libraryItem, i) => (<GameCard key={i} gameinfo={libraryItem.game} showGenre={true} gametime={libraryItem.gametime}/>))}
        </>
    )
}

//{userLib?.map((user) => user.games?.map((libItem, i) => (<GameCard key={i} gameinfo={libItem.game} showGenre={true} gameTime={libItem.game_time}/>)))}