import axios from 'axios'

import {
    popularGamesURL,
    upcomingGamesURL,
    newGamesURL,
    searchGameURL
} from '../api'


// ACTION CREATOR
export const loadGames = ()=> async (dispatch)=> {

    //FETCH AXIOS
    const popularData = await axios.get(popularGamesURL())
    const upcomingData = await axios.get(upcomingGamesURL())
    const newGamesData = await axios.get(newGamesURL())

    dispatch({
        type: "FETCH_GAMES",
        payload: {
            popular: popularData.data.results,
            upcoming: upcomingData.data.results,
            newGames: newGamesData.data.results,
        }
    })
}


//QUESTION: where does game_name come from?
export const fetchSearch = (game_name)=> async(dispatch)=> {
    const searchGames = await axios.get(searchGameURL(game_name))

    dispatch( {
        type: 'FETCH_SEARCHED',
        payload: {
            searched: searchGames.data.results,
        }
    })
}