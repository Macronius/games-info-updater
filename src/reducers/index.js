// this will act as the reducer combiner

import {combineReducers} from 'redux' //takes multiple reducers and combines them into one, which then goes into the 'store' createStore
import gamesReducer from './gamesReducer'



const rootReducer = combineReducers({
    games: gamesReducer,
})


export default rootReducer