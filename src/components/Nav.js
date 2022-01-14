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

    // return(
    //     <StyledNav 
    //         variants={fadeIn} 
    //         initial='hidden' 
    //         animate='show'
    //     >
    //         <Logo onClick={clearSearch}>
    //             <img src={logo} alt="logo" />
    //             <h1>Ignite</h1>
    //         </Logo>
    //         <form className="search">
    //             <input type="text" onChange={inputHandler} value={textInput} />
    //             <button type="submit" onClick={submitSearch}>Search</button>
    //         </form>
    //     </StyledNav>
    // )
    return(
        <StyledNav 
            variants={fadeIn} 
            initial='hidden' 
            animate='show'
        >
            <div className="nav-left-wrapper">
                <Logo onClick={clearSearch}>
                    <img src={logo} alt="logo" />
                    <h1>Ignite</h1>
                </Logo>
                <form className="search">
                    <input type="text" onChange={inputHandler} value={textInput} />
                    <button type="submit" onClick={submitSearch}>Search</button>
                </form>
            </div>
            <ThemeSwitchWrapper className="theme-switch-wrapper">
                <span id="toggle-icon">
                    <span className="toggle-text">Light Mode</span>
                    <i className="fas fa-sun"></i>
                </span>
                <label className="theme-switch">
                    <input type="checkbox" />
                    <div className="slider round"></div>
                </label>
            </ThemeSwitchWrapper>
        </StyledNav>
    )
}

const StyledNav = styled(motion.div)`
    width: 100%;
    height: 10rem;
    /* outline: .5px solid; */
    display: flex;
    justify-content: space-between;
    padding: 3rem 5rem;
    text-align: center;
    /* position: fixed; */
    background-color: rgb(127.7 127.5 127.5 / 20%);
    position: fixed;
    z-index: 10;
    /* margin-bottom: 10rem; */

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
    .nav-left-wrapper {
        display: flex;
        justify-content: space-between;
        width: 30%;
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

const ThemeSwitchWrapper = styled(motion.div)`
    width: 20%;
    display: flex;
    align-items: center;
    margin-right: 10px;
    font-size: 1rem;

    label {
        margin-left: 3rem;
    }

    .toggle-text {
    position: relative;
    top: -4px;
    right: 5px;
    color: var(--on-background);
    }

    .theme-switch {
    display: inline-block;
    height: 34px;
    position: relative;
    width: 60px;
    }

    .theme-switch input {
    display: none;
    }

    .slider {
    background: #ccc;
    bottom: 0;
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: 0.4s;
    }

    .slider::before {
    background: #fff;
    bottom: 4px;
    content: "";
    height: 26px;
    left: 4px;
    position: absolute;
    transition: 0.4s;
    width: 26px;
    }

    input:checked + .slider {
    background: var(--primary-color);
    }

    input:checked + .slider::before {
    transform: translateX(26px);
    }

    .slider.round {
    border-radius: 34px;
    }

    .slider.round::before {
    border-radius: 50%;
    }

    .fas {
    font-size: 30px;
    margin-right: 5px;
    }

`

export default Nav