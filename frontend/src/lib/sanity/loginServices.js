import { client } from "./client"

//Groq for alle type brukere og usermail er satt til email. Email inneholder da user_mail og user_name.
export const fetchUser = async (email) => {
    const data = await client.fetch(`*[_type == "users" && user_mail == $email]
    {user_mail, user_name}`, {email})
    return data[0]
}