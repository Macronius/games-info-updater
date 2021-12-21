//base url
const BASE_URL = 'https://api.rawg.io/api/'

const API_KEY = '68331ddae2cb4cccb77fcfa777c3d770'

//getting the date
const getCurrentMonth = ()=> {
    const month = new Date().getMonth()+1
    if(month < 10) {
        return `0${month}`
    }
    else {
        return month
    }
}

//get current day
const getCurrentDay = ()=> {
    const day = new Date().getDate()
    if(day < 10) {
        return `0${day}`
    }
    else {
        return day
    }
}

//get current day/month/year
const CURRENT_YEAR = new Date().getFullYear()
const CURRENT_MONTH = getCurrentMonth()
const CURRENT_DAY = getCurrentDay()
const CURRENT_DATE = `${CURRENT_YEAR}-${CURRENT_MONTH}-${CURRENT_DAY}`
const LAST_YEAR = `${CURRENT_YEAR -1}-${CURRENT_MONTH}-${CURRENT_DAY}`
const NEXT_YEAR = `${CURRENT_YEAR +1}-${CURRENT_MONTH}-${CURRENT_DAY}`

//popular games
const popular_games = `games?key=${API_KEY}&dates=${LAST_YEAR},${CURRENT_DATE}&ordering=-rating&page_size=10`

const popularGamesURL = ()=> `${BASE_URL}${popular_games}`

console.log(popularGamesURL())