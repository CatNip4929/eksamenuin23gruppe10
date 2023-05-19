import { useEffect, useState } from "react"
import { fetchUserFavorites, fetchUserFavoriteGameCount } from "../lib/sanity/userServices"
import GameCard from "./GameCard"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom"

export default function MyFavorites({user, i}) {
    const [userLib, setUserLibrary] = useState()
    const [favoritesCount, setFavoritesCount] = useState();
//Fetch for alle spill
    useEffect (() => {
    const getUserLib = async () => {
    const data = await fetchUserFavorites(user.user_mail)
    //console.log(data)
    setUserLibrary(data[0])
    }
    
//Fetch for FavoritesCount for spill i favoritter og teller dem og gir den en count verdi basert på antall elementer i arrayen over favorittspill fra en brukers favoritt.
    const getUserFavoritesCount = async () => {
        const data = await fetchUserFavoriteGameCount(user.user_mail);
        setFavoritesCount(data[0]);
    }
//Ved endringer i user, hentes brukerens spillbibliotek og favorittspill.
       getUserLib() 
       getUserFavoritesCount(user[0]);
    }, [user] )
    return(
        <>
            <NavLink to="/favourites"><h2 className="center-title">My favorites <FontAwesomeIcon style={{color: 'yellow'}} icon={faStar} /> ({favoritesCount?.favoritesCount})</h2></NavLink>
            <div className="favorites">
            {userLib?.favorites.map((libraryItem, i) => (<GameCard key={i} gameinfo={libraryItem.game} showGenre={false} gametime={libraryItem.gametime}/>))}
            </div>
        </>
    )
}