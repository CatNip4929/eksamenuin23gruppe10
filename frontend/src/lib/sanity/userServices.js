import {client} from "./client"

//Hent alle spill
export const fetchAllUsers = async () => {
    const data =await client.fetch(`*[_type == "users"]`)
    return data

}

export const fetchUserLibrary = async (email) => {
    const data = await client.fetch(`*[_type == "users" && user_mail == $email]
    {game_library}`, {email})
    return data[0]
}