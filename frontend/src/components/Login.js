import { useEffect, useState } from "react"
import { fetchUser } from "../lib/sanity/loginServices"
import { Link } from "react-router-dom"


export default function Login ({setUser, exists, setExists}) {
    const [loginData, setLoginData] = useState()

    //håndterer submitt for getLoginData
    const handleSubmit = (e) =>{
        e.preventDefault()

        getLoginData()
    }
    
    const handleChange = (e) =>{
        const inputName = e.target.name
        const inputValue = e.target.value
        setLoginData((prev) => ({...prev,[inputName]: inputValue}))
    }
    const getLoginData = async() => {
        const data = await fetchUser(loginData.email)
        if(data==null){
            //no user
            setExists(false)
            return
        }
        setExists(true)
        setUser(data.name)
    }
    
    
    return (
        <>
        <form onSubmit={handleSubmit}>
                <label>E-mail</label> 
                <input type="email" id="email" placeholder="name@catmail.com" name="email" required onChange={handleChange}></input>
                <label>Password</label>
                <input type="password" id="password" name="password" placeholder="********" disabled></input>
                <button type="submit">Login</button>
        </form>
        {exists == false ? <p>Brukeren finnes ikke, <Link to="index">Hjem</Link></p> : null}
        </>
    )
}