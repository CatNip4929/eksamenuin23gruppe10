import { useEffect, useState } from "react"
import { fetchUserLibrary } from "../lib/sanity/userServices"
import GameCard from "./GameCard"


export default function ({user}) {
    const [userLib, setUserLibrary] = useState()
    //fetch for alle spill
  const getUserLib = async () => {
    const data = await fetchUserLibrary(user.user_mail)
    setUserLibrary(data)
    }

    useEffect (() => {
       getUserLib(user) 
    }, [user] )
    return(
        <>
      <h1>My favorites</h1>
      {userLib?.map((p,i) =>  (console.log(p[0]) ))}
        </>
    )
}