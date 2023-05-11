import {client} from "./client"

//Hent alle spill
export const fetchAllUsers = async () => {
    const data =await client.fetch(`*[_type == "users"]`)
    return data

}