import { client } from "./client"
export const fetchUser = async (email) => {
    const data = await client.fetch(`*[_type == "users" && user_mail == $email]
    {user_mail, name}`, {email})
    return data[0]
}