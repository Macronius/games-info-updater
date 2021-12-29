



installed redux devtools to the redux createStore
    https://github.com/zalmoxisus/redux-devtools-extension



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