import { useNavigate } from "react-router-dom"

export default function Welcome({user}){
    let navigate = useNavigate()
    const handleClick = () => {
        localStorage.removeItem("user")
        localStorage.removeItem("exists")
        navigate(0)
    }
    return(
        <>
        <article>
            <h1>Welcome {user.user_name}</h1>
            <button type="submit" onClick={handleClick}>Logg ut</button>
        </article>
        
        </>
    )
}


