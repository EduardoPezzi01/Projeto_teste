import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    
    :root {
        --background-login: #F7F8FD
        --background: #ECF0F3


        --blue-500: #114871
        --blue-500: #134E87
        --blue-700: #05032E
        

        --gray-300: #B0B6BB
        --gray--600: #50555A
        --gray-400: #303030
        
        --orange-600: #F56C00

        --red-600: #FF5C5C

    }

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   }

   body {
    -webkit-font-smoothing: antialiased;
    background-color: #fae3e3;
   }

   body, input, header {
    font-family: 'Roboto', sans-serif;
   }

   header {
    background-color: #114871;
    width: 100vw;
    height: 7rem;
    padding: 0.625rem;

   

   p{ 
    color: #dbd5d5;
    margin-left: 1100px;
    margin-top: -30px;
   }

   span a {
    text-decoration: none;
    text-transform: uppercase;
    color: white;
    font-weight: 700;
   }

   nav a{
    text-decoration: none;
    color: white;
    text-transform: uppercase;
    font-weight: 700;

    &:hover {
       color: #00000083;
       transition: 300ms;
    }
   }

   nav ul {
    display: flex;
    justify-content: space-around;
    list-style: none;
    margin-top: 50px;
    
    
   }

   h1 {
    position: absolute;
    margin-left: 75px;
    margin-top: 27.5px;
    font-weight: 700;
    font-size: 23px;
    

    
   }

   

   

   
    
   }

   
   


`



