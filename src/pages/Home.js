import React, {useEffect} from 'react'
import {useLocation} from 'react-router-dom'

//Components
import Game from '../components/Game'
import GameDetail from '../components/GameDetail'

//Styling and Animation
import styled from 'styled-components'
import {motion, AnimatePresence, AnimateSharedLayout} from 'framer-motion'
import {fadeIn} from '../animations'

//REDUX IMPORTS
import {useDispatch, useSelector} from 'react-redux'
import {loadGames} from '../actions/gamesAction'




const Home = ()=> {

    //get the current location
    const location = useLocation()
    const pathId = location.pathname.split("/")[2]

    //FETCH GAMES
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(loadGames())
    }, [dispatch])

    //get that data back (extract)
    const {popular, newGames, upcoming, searched} = useSelector( state=> state.games)
    

    return (
        <GameList
            variante={fadeIn}
            initial='hidden'
            animate='show'
        >
            {/*<AnimateSharedLayout type="crossfade">*/}
            <AnimateSharedLayout>
                <AnimatePresence>
                    {pathId && <GameDetail pathId={pathId} />}
                </AnimatePresence>
                {
                    searched.length ? (
                    <div className="searched">
                        <h2>Searched Games</h2>
                        <Games>
                            {
                                searched.map( game=> (
                                    <Game 
                                        name={game.name} 
                                        released={game.released} 
                                        id={game.id} 
                                        image={game.background_image} 
                                        key={game.id} 
                                    />
                                ))
                            }
                        </Games>
                    </div>
                    ) : ''
                }

                <h2>Upcoming Games</h2>
                <Games>
                    {
                        upcoming.map( game=> (
                            <Game 
                                name={game.name} 
                                released={game.released} 
                                id={game.id} 
                                image={game.background_image} 
                                key={game.id} 
                            />
                        ))
                    }
                </Games>
                <h2>Popular Games</h2>
                <Games>
                    {
                        popular.map( game=> (
                            <Game 
                                name={game.name} 
                                released={game.released} 
                                id={game.id} 
                                image={game.background_image} 
                                key={game.id} 
                            />
                        ))
                    }
                </Games>
                <h2>New Games</h2>
                <Games>
                    {
                        newGames.map( game=> (
                            <Game 
                                name={game.name} 
                                released={game.released} 
                                id={game.id} 
                                image={game.background_image} 
                                key={game.id} 
                            />
                        ))
                    }
                </Games>
            </AnimateSharedLayout>
        </GameList>
    )
}


const GameList = styled(motion.div)`
    padding: 0rem 5rem;
    h2 {
        padding: 5rem 0rem;
    }
`

const Games = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
    /* cursor: pointer; */
`

export default Home



