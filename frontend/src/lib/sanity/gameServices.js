import {client} from "./client"

//Hent alle spill
export const fetchAllGames = async () => {
    const data =await client.fetch(`*[_type == "games"]`)
    return data
}

export const fetchGame = async (slug) => {
    const data = await client.fetch(`*[_type == "games" && slug.current == $slug]
    {name, game_developers, game_categories, game_publisher, game_release, game_plot, game_platforms, game_stores, "imageURL":background_image.asset->url, "catname":game_category->category_title}
    `, {slug})
    
    return data
}
