import {client} from "./client"

export const fetchAllCategories = async () => {
    const data = await client.fetch(`*[_type == "categories"]`)
    return data
}

export const fetchCategory = async (category) => {
    const data = await client.fetch(`*[_type == "categories" && category_slug.current == $category]
    {category_title, "games":
     *[_type == "games" && game_category._ref == ^._id]
     {game_title,game_tags, "slug": slug.current}
    }`,{category})
    return data
}