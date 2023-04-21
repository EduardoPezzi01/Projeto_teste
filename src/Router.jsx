import { BrowserRouter, Route, Routes  } from 'react-router-dom'
import  Home  from './pages/Home'
import  Login  from './pages/Login'
import Cadastro from './pages/Cadastro'
import Loja from './pages/Loja'
import Painel from './pages/Dashboard'
import Categoria from './pages/Categoria'


function Router() {
return (
    <BrowserRouter>
    <Routes>
        <Route />

        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/loja' element={<Loja />} />
        <Route path='/painel' element={<Painel />} />
        <Route path='/categoria' element={<Categoria />} />
    </Routes>
    </BrowserRouter>
)

}

export default Router