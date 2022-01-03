import React from 'react'
//Styling and Animation
import styled from 'styled-components'
import {motion} from 'framer-motion'
//REDUX
import {useDispatch} from 'react-redux'
import {loadDetail} from '../actions/detailAction'
import {Link} from 'react-router-dom'


const Game = ({name, released, image, id})=> {
    const stringPathId = id.toString()

    //Load Details
    const dispatch = useDispatch()

    const loadDetailHandler = ()=> {
        document.body.style.overflow = "hidden"
        dispatch(loadDetail(id))
        // console.log(id)
        // console.log("Game typeof pathId: ", typeof id)
        // console.log("Game typeof stringPathId: ", typeof stringPathId)
    }

    return(
        <StyledGame layoutId={stringPathId} onClick={loadDetailHandler}>
            <Link to={`/game/${id}`}>
                <motion.h3 layoutId={`title ${stringPathId}`}>
                    {name}
                </motion.h3>
                <p>{released}</p>
                <motion.img 
                    layoutId={`image ${stringPathId}`} 
                    src={image} 
                    alt={name} 
                />
            </Link>
        </StyledGame>
    )
}


const StyledGame = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0px 5px 20px rgba(0,0,0,0.2);
    text-align: center;
    border-radius: 1rem;
    cursor: pointer;
    overflow: hidden;
    img {
        width: 100%;
        height: 40vh;
        object-fit: cover;
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;
    }
`

export default Game