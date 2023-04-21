
import { useState } from 'react'


import LogoPng from '../../assets/img/logo.png' 
import React from 'react'
import { FaBars} from "react-icons/fa"
import { FaRegUserCircle } from 'react-icons/fa'
import { FaHeadset } from 'react-icons/fa'




import Slider from '../../commons/Slider/Slider'

import TvPng from '../../assets/img/tv.png'
import PhonePng from '../../assets/img/phone.png'
import NotePng from '../../assets/img/note.png'
import HeadPng from '../../assets/img/head.png'

import { 
  FaRegHeart,FaHouseUser,FaUser,FaShoppingBasket,
  FaThumbsUp,FaCommentAlt,FaHeart, FaUserTie
} 
  from 'react-icons/fa'

import { FaShoppingCart } from 'react-icons/fa'
import Modal from '../../components/Modal'



import { 
ContainerHome,
LogHeader,
ContainerInput,
BottonHeader,
NavModal,
SectionProduct,
ArticleProduct,
ArticleProductB,
ArticleProductC,
ArticleProductD
} from "./styles"





const Home = () => {


 const [openModal, setOpenModal] = useState(false)


  
 return (
    
    <ContainerHome>
        
    <header>

      <BottonHeader>

      </BottonHeader>
      
    <div className="menumodal">
        <FaBars onClick={() => setOpenModal(true)}
        size='40px' style={{color:'white', position:'absolute', 
            margin:'30px', top:'0.5%',left:'65px', cursor:'pointer'}} />

            <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
               <FaRegUserCircle size='40px' style={{color:'darkgrey', position:'absolute', 
              marginTop:'20px', marginLeft:'15px'}} />
              
              <h1>Olá.Faça seu login</h1>


              <NavModal>

              <FaHouseUser size={'22px'} />  <a href="#">Minha conta</a>
             <FaUser size={'22px'}  />   <a href="#">Meus Dados</a>
              <FaShoppingBasket size={'22px'} />   <a href="#">Meus pedidos</a>
              <FaThumbsUp size={'22px'} />  <a href="#">Avaliações</a>
              <FaCommentAlt size={'22px'} />  <a href="#">Atendimento</a>
              <FaHeart size={'22px'} /> <a href="#">Favoritos</a>
              <FaUserTie size={'22px'} /> <a href='#'>Login Administrador</a>
              </NavModal>
             
            </Modal>
      </div>

    
     
          
        <FaRegUserCircle size='40px'  style={{color:'darkgrey', position: 'absolute',
            marginLeft:'1050px', marginTop:'20px'
         
    }}/>
      


    <LogHeader>
           <a href='/' > <img src={LogoPng} /> </a>
        </LogHeader>

    <ContainerInput>
        <input placeholder='Busque aqui' />
        <button>Pesquisar</button>
    </ContainerInput>

    <span>
    <p>Faça <a href="http://localhost:3000/login">login</a> ou 
    <br /> crie seu <a href="/cadastro">cadastro</a> </p>
    </span>

    <div style={{color:'darkgrey',position:'absolute', left:'88%', top:'4%', 
    display:'flex', gap:'35px', cursor:'pointer'}}>

    <FaHeadset size={'25px'} title="SAC"/>
    <FaRegHeart size={'25px'} title="Favoritos"/>
    <FaShoppingCart size={'25px'} title="Carrinho"/>
    </div>

   <nav>
    <ul>
      <li>
        <a href="#">LANÇAMENTOS</a> 
      </li>
      <li>
      <a href="#">PC GAMER</a> 
      </li>
      <li>
      <a href="#">SMARTPHONES</a> 
      </li>
      <li>
      <a href="#">TV</a> 
      </li>
      <li>
      <a href="#">SEJA PREMIUM</a> 
      </li>
      <li>
      <a href="#">BAIXE O APP</a> 
      </li>
    </ul>
   </nav>

   
    </header>

    <Slider />

    <SectionProduct>
      <ArticleProduct>
        <img src={TvPng}></img>
        <p>Smart TV Samsung 43" UHD 4K</p>
        <h5>R$ 1999,99</h5>
        <span>À vista no pix</span>
        <a href="#">comprar</a>
      </ArticleProduct>

    

      <ArticleProductB>
        <img src={PhonePng}></img>
        <p>Smart TV Samsung 43" UHD 4K</p>
        <h5>R$ 1199,99</h5>
        <span>À vista no pix</span>
        <a href="#">comprar</a>
      </ArticleProductB>

      <ArticleProductC>
        <img src={NotePng}></img>
        <p>Smart TV Samsung 43" UHD 4K</p>
        <h5>R$ 2518,99</h5>
        <span>À vista no pix</span>
        <a href="#">comprar</a>
      </ArticleProductC>

      <ArticleProductD>
      <img src={HeadPng}></img>
        <p>Smart TV Samsung 43" UHD 4K</p>
        <h5>R$ 239,99</h5>
        <span>À vista no pix</span>
        <a href="#">comprar</a>
      </ArticleProductD>

      

     
    </SectionProduct>
   
    </ContainerHome>
  )
}

export default Home