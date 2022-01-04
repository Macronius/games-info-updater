import React, {useState} from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import logo from '../img/logo.svg'
//REDUX AND ROUTES
import {fetchSearch} from '../actions/gamesAction'
import {useDispatch} from 'react-redux'
import {fadeIn} from '../animations'



const Nav = ()=> {

    const dispatch = useDispatch()
    // dispatch(fetchSearch())

    const [textInput, setTextInput] = useState('')
    const inputHandler = e=> {
        setTextInput(e.target.value)
    }
    const submitSearch = (e)=> {
        e.preventDefault()
        dispatch(fetchSearch(textInput))
        setTextInput('')
    }

    const clearSearch = ()=> {
        dispatch({type: "CLEAR_SEARCHED"})
    }

    return(
        <StyledNav 
            variants={fadeIn} 
            initial='hidden' 
            animate='show'
        >
            <Logo onClick={clearSearch}>
                <img src={logo} alt="logo" />
                <h1>Ignite</h1>
            </Logo>
            <form className="search">
                <input type="text" onChange={inputHandler} value={textInput} />
                <button type="submit" onClick={submitSearch}>Search</button>
            </form>
        </StyledNav>
    )
}

const StyledNav = styled(motion.div)`
    padding: 3rem 5rem;
    text-align: center;
    input {
        width: 30%;
        font-size: 1.5rem;
        padding: 0.5rem;
        border: none;
        margin-top: 1rem;
        box-shadow: 0 0 30px rgba(0,0,0,0.2);
        font-weight: bold;
        font-family: "Montserrat", sans-serif;
    }
    button {
        font-size: 1.5rem;
        border: none;
        padding: 0.5rem 2rem;
        cursor: pointer;
        background: #ff7676;
        color: white;
    }
`

const Logo = styled(motion.div)`
    display: flex;
    justify-content: center;
    padding: 1rem;
    cursor: pointer;
    img {
        width: 2rem;
        height: 2rem;
    }
`

export default Nav