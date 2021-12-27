// import dotenv from 'dotenv'

// dotenv.config()



// BASE URL
const BASE_URL = 'https://api.rawg.io/api/'

const API_KEY = '68331ddae2cb4cccb77fcfa777c3d770'
// const API_KEY = process.env.REACT_APP_API_KEY

// GET THE DATE
const getCurrentMonth = ()=> {
    const month = new Date().getMonth()+1
    if(month < 10) {
        return `0${month}`
    }
    else {
        return month
    }
}

// GET CURRENT DAY
const getCurrentDay = ()=> {
    const day = new Date().getDate()
    if(day < 10) {
        return `0${day}`
    }
    else {
        return day
    }
}


// GET CURRENT DAY/MONTH/YEAR
const CURRENT_YEAR = new Date().getFullYear()
const CURRENT_MONTH = getCurrentMonth()
const CURRENT_DAY = getCurrentDay()
const CURRENT_DATE = `${CURRENT_YEAR}-${CURRENT_MONTH}-${CURRENT_DAY}`
const LAST_YEAR = `${CURRENT_YEAR -1}-${CURRENT_MONTH}-${CURRENT_DAY}`
// const NEXT_YEAR = `${CURRENT_YEAR +1}-${CURRENT_MONTH}-${CURRENT_DAY}`


// POPULAR GAMES URL
const popular_games = `games?key=${API_KEY}&dates=${LAST_YEAR},${CURRENT_DATE}&ordering=-rating&page_size=10`
// const popular_games = 'https://api.rawg.io/api/games?key=68331ddae2cb4cccb77fcfa777c3d770&2020-12-01,2021-11-01&ordering=-rating&page_size=10'
// const popular_games = `games?key=${process.env.REACT_APP_API_KEY}&dates=${LAST_YEAR},${CURRENT_DATE}&ordering=-rating&page_size=10`

export const popularGamesURL = ()=> `${BASE_URL}${popular_games}`