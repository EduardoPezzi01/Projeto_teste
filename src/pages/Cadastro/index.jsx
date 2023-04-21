import React from 'react'
import axios from 'axios'
import { useState } from  'react'
import { useNavigate } from 'react-router-dom'

import { ContainerCadastro,FormCadastro, } from '../Cadastro/styles'
import { LogHeader } from '../Home/styles'
import LogoPng from '../../assets/img/logo.png' 





const Cadastro = () => {
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
const [email, setEmail] = useState('')
const [senha, setSenha] = useState('')
const [fone, setFone] = useState('')
const [logradouro, setLogradouro] = useState('')
const [numero, setNumero] = useState('')
const [bairro, setBairro] = useState('')
const [cidade, setCidade] = useState('')
const [estado, setEstado] = useState('')
const [cep, setCep] = useState('');
const [mensagem, setMensagem] = useState('')
  
const handleSubmit = (event) => {
    event.preventDefault()
    const data = {
        nome,
        email,
        senha,
        fone,
        tipoUser: '2',
        logradouro,
        numero,
        bairro,
        cidade,
        estado,
        cep,
        tipoEnd: '1'
    };

    
    
    axios.post('https://api-ecommerce-gamaxp47.herokuapp.com/usuario', data)
        .then(response => {
            setMensagem(alert('Usuário criado com sucesso!'))
            navigate('/')
           
        })
        .catch(error => {
            console.log(error)
            setMensagem('Prencha os campos restantes')
        })
}

  
  
  
  return (
<ContainerCadastro>

<header>
   
   <LogHeader>
             <a href='/'> <img src={LogoPng} /> </a>
          </LogHeader>
         
          
      </header>
      <h1>criar conta</h1>
    <FormCadastro onSubmit={handleSubmit}>
      
    <label>
            Nome:
            <input type="text" value={nome} onChange={e => setNome(e.target.value)} />
          </label>
          <label>
            Email:
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
          </label>
          <label>
            Senha:
            <input type="password" value={senha} onChange={e => setSenha(e.target.value)} />
          </label>
          <label>
            Telefone:
            <input type="text" value={fone} onChange={e => setFone(e.target.value)} />
          </label>
          <label>
            Logradouro:
            <input type="text" value={logradouro} onChange={e => setLogradouro(e.target.value)} />
          </label>
          <label>
            Numero:
            <input type="text" value={numero} onChange={e => setNumero(e.target.value)} />
          </label>
          <label>
            Bairro:
            <input type="text" value={bairro} onChange={e => setBairro(e.target.value)} />
          </label>
          <label>
            Cidade:
            <input type="text" value={cidade} onChange={e => setCidade(e.target.value)} />
          </label>
          <label>
            Estado:
            <input type="text" value={estado} onChange={e => setEstado(e.target.value)} required />
          </label>
          <label>
            Cep:
            <input type="text" value={cep} onChange={e => setCep(e.target.value)} />
          </label>

          <button type="submit">Enviar</button>
          {mensagem && <p>{mensagem}</p>}
  </FormCadastro>

  <footer>

  </footer>
  </ContainerCadastro>
  )
}

export default Cadastro