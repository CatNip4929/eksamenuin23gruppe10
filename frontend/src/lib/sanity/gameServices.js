import {client} from "./client"

//Hent alle spill
export const fetchAllGames = async () => {
    const data =await client.fetch(`*[_type == "games"]`)
    return data

}

export const FetchGame = async (slug) => {
    const data = await client.fetch(`*[_type == "games" && slug.current == $slug]
    {game_title, game_developers, game_tags, game_publisher, game_release, game_plot, "imageURL":game_image.asset->url, "catname":game_category->category_title}
    `, {slug})
    return data
}
