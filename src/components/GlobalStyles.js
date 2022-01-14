import {createGlobalStyle} from 'styled-components'


const GlobalStyles = createGlobalStyle`

    :root {
        --primary-color: rgb(255, 92, 92);
        --primary-variant: #ff2d2d;
        --secondary-color: #1b9999;
        --on-primary: rgb(250, 250, 250);
        --on-background: rgb(66, 66, 66);
        --on-background-alt: rgba(66, 66, 66, 0.7);
        --background: rgb(255, 255, 255);
        --box-shadow: 0 5px 20px 1px rgba(0, 0, 0, 0.5);
    }

    [data-theme="dark"] {
        --primary-color: rgb(150, 65, 255);
        --primary-variant: #6c63ff;
        --secondary-color: #03dac5;
        --on-primary: #000;
        --on-background: rgba(255, 255, 255, 0.9);
        --on-background-alt: rgba(255, 255, 255, 0.7);
        --background: #121212;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        &::-webkit-scrollbar {
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb {
        background-color: darkgray;
        }
        &::-webkit-scrollbar-track {
        background-color: white;
        }
    }
    body {
        font-family: 'Montserrat', sans-serif;
        width: 100%;
        // ____________________
        background-color: var(--background);
        color: var(--on-background);
    }
    h2 {
        font-size: 3rem;
        font-family: 'Abril Fatface', cursive;
        font-weight: lighter;
        // color: #ff7676;
        color: #333;
    }
    h3 {
        font-size: 1.3rem;
        color: #333;
        padding: 1.5rem 0;
    }
    p {
        font-size: 1.2rem;
        line-height: 200%;
        color: #696969;
    }
    a {
        text-decoration: none;
        color: #333;
    }

    img {
        display: block;
    }

    input {
        font-weight: bold;
        font-family: "Montserrat", sans-serif;
    }
`

export default GlobalStyles