import './App.css';
import Home from './components/home/home';
import Main from './components/main/main';
import Logo from './components/logo/logo';
import Login from './components/auth/login/login'
import Register from './components/auth/register/register'
import ProductList from './components/productList/productList'
import ProductDetails from './components/productDetails/productDetails';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './components/context/AuthContext';
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
      {/* <Home /> */}
      <Routes>
        <Route path='/' element={<ProtectRoute><Main /></ProtectRoute>} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        <Route path='/product' element={<ProductList />} />
        <Route path='/product/:id' element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
