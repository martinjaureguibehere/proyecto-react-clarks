import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ResponsiveAppBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import MainItem from './components/MainItem/MainItem';
import Contact from '../src/Pages/Contact'
import Home from './Pages/Home';
import Products from '../src/Pages/Products';
import Detail from './Pages/Detail'
import { CartProvider } from '../src/context/CartContext'


function App() {

  return (

    <div className="App">
    <CartProvider>
      <BrowserRouter>
        <ResponsiveAppBar />
        <Routes>
          <Route path='/contact' element={<Contact/>} />
          <Route path='/home' element={<Home/>}  />
          <Route path='/products' element={<Products/>} />
          <Route path='/' element={<Home/>}  />
          <Route path='/product/:id' element={<Detail/>} />
        </Routes>
      </BrowserRouter>
    </CartProvider> 
    </div>
  );
}

export default App;