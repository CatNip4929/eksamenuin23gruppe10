import { useEffect, useState } from "react"
import { fetchUser } from "../lib/sanity/loginServices"


export default function LoginPage () {
    // const handleSubmit = (e) =>{
    //     e.preventDefault()
    // }
    // const handleChange = (e) =>{

    // }
    
    
    
  
    return (
        <>
        <form>
        <div>
           <label>E-mail</label> 
           <input type="text" placeholder="name@catmail.com" name="yourname" required></input>
        </div>
        <div>
            <label>Password</label>
            <input type="password" placeholder="password" disabled name="pass"></input>
            <button type="submit">Login</button>
        </div>
        </form>
        </>
    )
}