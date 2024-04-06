import './App.css';
import Home from './components/home/home';
import Main from './components/main/main';
import Logo from './components/logo/logo';
import Login from './components/auth/login/login'
import Register from './components/auth/register/register'
import ProductList from './components/productList/productList'
import ProductDetails from './components/productDetails/productDetails';
import { Route, Routes, Navigate } from 'react-router-dom';
import React, { useContext } from 'react';
import { AuthContext } from './components/context/AuthContext';
import FavoriteCartProduct from './components/favoriteCartProduct/favoriteCartProduct';
import FavoriteProduct from './components/favoriteProduct/favoriteProduct';
import Basket from './components/basket/basket';
// import NavBar from './components/navBar/navBar';
import About from './components/about/about';
import ProductContainer from './components/productDetails/productContainer';
// import { products } from './products/productsData';
// import { products } from './products/productsData';


function App() {

  const { currentUser } = useContext(AuthContext)

  const ProtectRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to='/login' />
    }
    return children
  }

  return (
    <div className="container">
      <Logo />
      <Basket />
      {/* <Home /> */}
      {/* <Routes>
        <Route path='/' element={<Logo />} />
      </Routes>
      <Routes>
        <Route path='/product' element={<Logo />} />
      </Routes> */}
      <Routes>

        <Route path='/' element={<ProtectRoute><Main /></ProtectRoute>} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        <Route path='/product' element={<ProductList />} />
        <Route path='/product/:id' element={<ProductContainer />} />
        <Route path='/about' element={<About />} />
        <Route path='/favorite' element={<FavoriteProduct />} />
      </Routes>
      {/* <Routes>
        <Route path='/about' element={<NavBar />} />
      </Routes>
      <Routes>

        <Route path='/about' element={<About />} />
      </Routes> */}
    </div>
  );
}

export default App;
