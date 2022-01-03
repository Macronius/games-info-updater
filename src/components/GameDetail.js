import React from 'react'
//Styling and Animation
import styled from 'styled-components'
import {motion} from 'framer-motion'
//REDUX
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'


const GameDetail = ({pathId})=> {
    const navigate = useNavigate()
    // console.log("GameDetail pathId: ", pathId)
    // console.log("GameDetail typeof pathId: ",typeof pathId)

    // EXIT DETAIL
    const exitDetailHandler = (e)=> {
        const element = e.target
        // console.log(exitDetailHandler)
        if(element.classList.contains('shadow')) {
            document.body.style.overflow = 'auto'
            navigate('/') //kind of like a link
        }
    }

    
    //DATA
    const {screen, game, isLoading} = useSelector( (state)=> state.detail)

    return (
        <>
            {
                !isLoading && (
                    <CardShadow className="shadow" onClick={exitDetailHandler}>
                        <Detail layoutId={pathId}>
                            <Stats>
                                <div className="rating">
                                    <motion.h3 layoutId={`title ${pathId}`}>
                                        {game.name}
                                    </motion.h3>
                                    <p>Rating: {game.rating}</p>
                                </div>
                                <Info>
                                    <h3>Platforms</h3>
                                    <Platforms>
                                        {
                                            game.platforms.map( data=> (
                                                <h3 key={data.platform.id}>{data.platform.name}</h3>
                                            ))
                                        }
                                    </Platforms>
                                </Info>
                            </Stats>
                            <Media>
                                <motion.img 
                                    layoutId={`image ${pathId}`} 
                                    src={game.background_image} 
                                    alt={game.background_image}
                                />
                            </Media>
                            <Description>
                                <p>{game.description_raw}</p>
                            </Description>
                            <div className="gallery">
                                {
                                    screen.results.map( screen=> (
                                        <img key={screen.id} src={screen.image} alt="particular individual game" />
                                    ))
                                }
                            </div>
                        </Detail>
                    </CardShadow>
                )
            }
        </>
    )
}


const CardShadow = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
    &::-webkit-scrollbar {
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb {
        background-color: pink;
    }
    &::-webkit-scrollbar-track {
        background-color: white;
    }
`
const Detail = styled(motion.div)`
    width: 80%;
    border-radius: 1rem;
    padding: 2rem 5rem;
    background: white;
    position: absolute;
    z-index: 10;
    left: 10%;
    color: black;
    img {
        width: 100%;
    }
`

const Stats = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Info = styled(motion.div)`
    align-items: center;
`

const Platforms = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;
    img {
        margin-left: 3rem;
    }
`

const Media = styled(motion.div)`
    margin-top: 5rem;
    img {
        width; 100%;
        /* height: 60vh;
        object-fit: cover; */
    }
`

const Description = styled(motion.div)`
    margin: 0rem 5rem;
`

export default GameDetail