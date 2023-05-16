import { useEffect, useState } from "react"
import { fetchUserLibrary } from "../lib/sanity/userServices"
import GameCard from "./GameCard"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

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
          
            <h1 className="center-title">My favorites <FontAwesomeIcon style={{color: 'yellow'}} icon={faStar} /></h1>
            <div className="favorites">
            {userLib?.map((user) => user.favorites?.map((favorite) => (<GameCard key={favorite.game} gameinfo={favorite.game}/>)))}
            </div>
        </>
    )
}
{/* <GameCard key={i} gameinfo={p} /> */}
// {userLib?.map((p,i) => (console.log(userLib[i].favorites[i].game)))}