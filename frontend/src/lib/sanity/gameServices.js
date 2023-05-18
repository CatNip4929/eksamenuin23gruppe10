import {client} from "./client"

//Henter alle spill
export const fetchAllGames = async () => {
    const data =await client.fetch(`*[_type == "games"]`)
    return data
}

//Groq-spørring for å hente ut spesifikk informasjon for alle type spill og med slug:current. Parameterer for hvilken informasjon spørringen skal hente ut.
//Navngitt imageurl, sånn at man kan hente ut bilder, satt catname til å være gamecategory for å hente ut categorytitle.
export const fetchGame = async (slug) => {
    const data = await client.fetch(`*[_type == "games" && slug.current == $slug]
    {name, game_developers, game_rating, game_categories, game_publisher, game_release, game_plot, game_platforms, game_stores, "imageURL":background_image.asset->url, "catname":game_category->category_title}
    `, {slug})
    
    return data
}

//Kilde benyttet flere steder der vi bruker groqspørringer: https://www.sanity.io/docs/query-cheat-sheet