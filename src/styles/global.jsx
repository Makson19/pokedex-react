import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif; 
        // transition: 0.3s linear;
    }

    html, body {
        font-size: 62.5%;
    }

    body {
        min-height: 100vh;
        background-color: #ddd;
    }

    li {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    #root {
        max-width: 100rem;
        margin: 0 auto;
    }
`;

export default GlobalStyle;