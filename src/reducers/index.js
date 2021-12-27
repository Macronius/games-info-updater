// this will act as the reducer combiner

import {combineReducers} from 'redux'
import gamesReducer from './gamesReducer'


const rootReducer = combineReducers({
    games: gamesReducer,
})


export default rootReducer