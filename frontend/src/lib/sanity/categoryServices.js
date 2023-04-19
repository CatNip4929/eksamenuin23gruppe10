import {client} from "./client"

export const fetchAlllCategories = async () => {
    const data = await client.fetch(`*[_type == "categories"]`)
    return data
}