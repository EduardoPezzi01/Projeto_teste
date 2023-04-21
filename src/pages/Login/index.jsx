import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import React from 'react'
import LogoPng from '../../assets/img/logo.png' 
import axios from 'axios'

import { 
  ContainerLogin, 
  FormLogin,
  ContainerInput,
  ContainerButtons,
  

} 
from '../Login/styles'


import { LogHeader } from "../Home/styles"


const Login = () => {

  const [emailUser, setEmailUser] = useState('')
  const [passwordUser, setPasswordUser] = useState('')
  const navigate = useNavigate()

  const handleSubmitLogin = (event) => {
    event.preventDefault()

    const loginData = { email: emailUser, senha: passwordUser }

    axios.post('https://api-ecommerce-gamaxp47.herokuapp.com/login', loginData)
      .then(response => {
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('user', response.data.nome)
        localStorage.setItem('userType', response.data.tipo)
        navigate('/')
      })
      .catch(error => {
        console.error('Ocorreu um erro ao fazer login:', error)
      })
  }
  

  return (

    <ContainerLogin>
    <header>
   
 <LogHeader>
           <a href='/'> <img src={LogoPng} /> </a>
        </LogHeader>
       
        
    </header>

    <FormLogin onSubmit={handleSubmitLogin}>

      <h1>fazer login</h1>
      <ContainerInput>
      <input type='text' placeholder='Email' onChange={e => setEmailUser(e.target.value)} value={emailUser}/>
      </ContainerInput>
      <ContainerInput>
        <input type='password' placeholder='Senha' onChange={e => setPasswordUser(e.target.value)} value={passwordUser}/>
      </ContainerInput>

        <ContainerButtons>
          <button type='submit'>Entrar</button>

        </ContainerButtons>

        <a href='#'>Esqueceu a Senha?</a>


    </FormLogin>


    <footer>
     

    </footer>

    </ContainerLogin>

   

  
  )
}

export default Login