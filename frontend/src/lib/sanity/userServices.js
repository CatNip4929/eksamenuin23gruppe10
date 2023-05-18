import {client} from "./client"

//Groq henter alle type brukere og brukerens email og setter parameter til å være email. 
//Henter brukerens favorittspill og bakgrunnsbilde basert på email
export const fetchUserFavorites = async (email) => {
    const data = await client.fetch(`*[_type == "users" && user_mail == $email]
    {"favorites": game_library[favorite] {..., game ->{..., background_image{...}}} }
    `, {email})
    return data
}

//Henter ut alle spill en bruker har i gamelibrary
export const fetchUserGameLibrary = async (email) => {
    const data = await client.fetch(`*[_type == "users" && user_mail == $email]
    {"games": game_library[] {..., game ->{..., background_image{...}}} }
    `, {email})
    return data
}

//Henter alle spill en bruker har og gir den en verdi på antall mengde spill ved å bruke count-metoden
export const fetchUserGameCount = async (email) => {
    const data = await client.fetch(`*[_type == "users" && user_mail == $email] {
      "gameCount": count(game_library[])
    }`, {email})
    return data
  }
//Henter alle favoritter til en bruker, bruker favorite til å spesifisere hvilken data vi vil ha
  export const fetchUserFavoriteGameCount = async (email) => {
    const data = await client.fetch(`*[_type == "users" && user_mail == $email] {
      "favoritesCount": count(game_library[favorite])
    }`, {email})
    return data
  }

  //Kilde: https://www.sanity.io/docs/query-cheat-sheet ble brukt til å finne count