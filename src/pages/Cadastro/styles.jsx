import styled from 'styled-components'

export const ContainerCadastro = styled.div`
    flex-direction: column;
    display: flex;
    justify-content: center;
    
    


    h1 {
text-transform: uppercase;
text-align: center;
margin: 50px auto;
color:#ff6200;
font-weight: 700;
font-size: 25px;

}

    footer {
        background-color:#114871 ;
        position: fixed;
        bottom: 0;
        width: 100%;
        padding: 30px;
    }
   

`



export const FormCadastro = styled.form`
display: flex;
//flex-wrap: wrap;
align-items: center;
//padding: 20px;
justify-content: center;
display: grid;
grid-template-columns: auto auto auto;
//margin: 0 auto;
gap: 20px;


label {
    width: 70%;
}


input {
  width: 130%;
  padding: 0.7rem;
  border: none;
  border-bottom: 2px solid #706f6f;
  font-size: 1.2rem;
  outline: none;
  background-color: transparent;
}

button {
    position: absolute;
    bottom: 15%;
    left: 40%;
    padding: 10px;
    width: 300px;
    cursor: pointer;
    background-color: #F56C00;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
}


a {
    color: grey;
    font-size: 15px;
    
}



    
`