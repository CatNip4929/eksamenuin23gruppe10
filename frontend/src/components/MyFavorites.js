import { useEffect, useState } from "react"
import { fetchUserFavorites, fetchUserFavoriteGameCount } from "../lib/sanity/userServices"
import GameCard from "./GameCard"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom"

export default function MyFavorites({user, i}) {
    const [userLib, setUserLibrary] = useState()
    const [favoritesCount, setFavoritesCount] = useState();
    //fetch for alle spill
    const getUserLib = async () => {
    const data = await fetchUserFavorites(user.user_mail)
    console.log(data)
    setUserLibrary(data[0])
    }

    const getUserFavoritesCount = async () => {
        const data = await fetchUserFavoriteGameCount(user.user_mail);
        setFavoritesCount(data[0]);
    }
    
    useEffect (() => {
       getUserLib(user[0]) 
       getUserFavoritesCount(user[0]);
    }, [user[0]] )
    return(
        <>
            <NavLink to="/favourites"><h2 className="center-title">My favorites <FontAwesomeIcon style={{color: 'yellow'}} icon={faStar} /> ({favoritesCount?.favoritesCount})</h2></NavLink>
            <div className="favorites">
            {userLib?.favorites.map((libraryItem, i) => (<GameCard key={i} gameinfo={libraryItem.game} showGenre={false} gametime={libraryItem.gametime}/>))}
            </div>
        </>
    )
}
{/* <GameCard key={i} gameinfo={p} /> */}
// {userLib?.map((p,i) => (console.log(userLib[i].favorites[i].game)))}