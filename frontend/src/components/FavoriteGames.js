import { useEffect, useState } from "react"
import { fetchUserFavorites } from "../lib/sanity/userServices"
import GameCard from "./GameCard"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function FavoriteGames({user, i}) {
    const [userLib, setUserLibrary] = useState()
    //fetch for alle spill
    const getUserLib = async () => {
    const data = await fetchUserFavorites(user.user_mail)
    console.log(data)
    setUserLibrary(data[0])
    }
    
    useEffect (() => {
       getUserLib(user[0]) 
    }, [user[0]] )
    return(
        <>
            <h1 className="center-title">My favorites<FontAwesomeIcon style={{color: 'yellow'}} icon={faStar} /></h1>
            <div className="favorites">
            {userLib?.favorites.map((libraryItem, i) => (<GameCard key={i} gameinfo={libraryItem.game} showGenre={false} gametime={libraryItem.gametime}/>))}
            </div>
        </>
    )
}
{/* <GameCard key={i} gameinfo={p} /> */}
// {userLib?.map((p,i) => (console.log(userLib[i].favorites[i].game)))}