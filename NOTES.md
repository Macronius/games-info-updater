import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider, useSelector, useDispatch} from 'react-redux'
import thunk from 'redux-thunk'
import {motion, AnimatePresence, AnimateSharedLayout} from 'framer-motion'
import styled from 'styled-components'
import axios from 'axios'

import {useHistory} -> {useNavigate} from 'react-router-dom'


=========================================================
TODO: revisit #16 - refactoring the wallpaper size images to smaller images




=========================================================
NOTE: about AnimatePresence, the motion component this is applied to should have some kind of toggled-boolean value to it (click-> true, clickAgain-> false)

AnimateSharedLayout, this is a wrapper for the components that will receive the animation transition




installed redux devtools to the redux createStore
    https://github.com/zalmoxisus/redux-devtools-extension


the api slug, the order of each part of the URL does not matter, however, when it comes to specifiers, such as games/13, where 13 is the id 
    of a particular game, the id must immediately follow the keyword games.
with regard to the api url, the api_key is followed by the '?', all othe request slugs are followed by the '&'


DEFINITIONS

    action - an object that describes what is going to happen

    action creator - a function that returns an action: type and a payload of more data
        ex
        const fetchGames = ()=> {
            return {
                type: 'FETCH_GAMES',
                payload: userData
            }
        }

        a similar approach is the dispatch

    redux thunk -  allows for asyncronous fetching of data, a feature that is not standard with redux

    applyMiddleware - checks on every action that is being dispatched, and adds something between (in this case, thunk is the middleware)

    compose - single-argument functions from right to left.  The rightmost function can take multiple arguments as it provides the signature for the resulting composite (basically combine multiple arguments)

    useSelector - get things back from the store (from the state)

    dispatch - 