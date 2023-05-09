export default function Welcome({user}){
    console.log(user)
    return(
        <>
        <h1>Welcome {user.user_name}</h1>
        </>
    )
}