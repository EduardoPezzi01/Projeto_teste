import styled from 'styled-components'

export const ContainerLogin = styled.div`
   
    align-items: center;

    footer {    
        background-color:#114871 ;
        position: fixed;
        bottom: 0;
        width: 100%;
        padding: 30px;
    }
   

`

export const FormLogin = styled.form`
display: flex;
flex-direction: column;
align-items: center;
padding: 20px;
margin-top: 20px;

h1 {
text-transform: uppercase;
margin-bottom: 30px; 
color:#ff6200;
font-weight: 700;
font-size: 25px;

}

a {
    color: grey;
    font-size: 15px;
    
}



    
`

export const ContainerInput = styled.div`
display: flex;
padding: 8px;

input {
    width: 300px;
    height: 40px;
    border-radius: 5px;
    outline: none;
    border: solid  darkgrey 2px;
    padding-left: 10px;
    color: black;
}
    
`

export const ContainerButtons = styled.div`
button {
    background-color:#ff6200;
    color: #fff;
    width: 300px;
    height: 35px;
    border-radius: 5px;
    border:none;
    cursor: pointer;
    font-size: 20px;
    font-weight: 700;
    margin-top: 10px;

}

    
`

