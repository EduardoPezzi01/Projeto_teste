
import axios from 'axios';
import React from 'react';
import GamescategoriaJpg from '../../assets/img/gamescategoria.jpg';
import ComputadorescategoriaJpg from '../../assets/img/computadorescategoria.jpg';
import PerifericoscategoriaJpg from '../../assets/img/perifericoscategoria.jpg';
import SmartphonecategoriaJpg from '../../assets/img/smartphonecategoria.jpg';
import HardwarecategoriaJpg from '../../assets/img/hardwarecategoria.jpg';
import LogoPng from '../../assets/img/logo.png';

import {
  ContainerCategoria,
  LogHeader,
} from './styles';

//

/*
axios.get('/user?ID=12345')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
*/

export function Categoria() {
    
    return (

<><header>

  <LogHeader>
    <a href='/'> <img src={LogoPng} /> </a>
  </LogHeader>

</header>
    
<main>
      <ContainerCategoria>
    <div>
      <a href='/'><img src={GamescategoriaJpg} alt="" /></a>
        <div>
          <h5>Games</h5>
          <a href="#">Comprar</a>
        </div>  
    </div>
    <div>
    <a href='/'><img src={HardwarecategoriaJpg} alt="" /></a>
        <div>
          <h5>Hardware</h5>
          <a href="#">Comprar</a>
        </div>
    </div>
    <div >
    <a href='/'><img src={ComputadorescategoriaJpg} alt="" /></a>
        <div >
          <h5>Computadores</h5>
          <a href="#" >Comprar</a>
        </div>
    </div>
    <div>
    <a href='/'><img src={PerifericoscategoriaJpg} alt="" /></a>
        <div>
          <h5>Perifericos</h5>
          <a href="#">Comprar</a>
        </div>
    </div>
    <div>
    <a href='/'><img src={SmartphonecategoriaJpg} alt="" /></a>
        <div>
          <h5 >Celulares & Smartphones</h5>
          <a href="#">Comprar</a>
        </div>
    
    </div>
    </ContainerCategoria>
  </main>
 
  <footer>


  </footer></>
 );
}

export default Categoria;