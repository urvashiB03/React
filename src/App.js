
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import CustomerSupport from './Pages/CustomerSupport';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import women_banner from './Components/Assets/w1.jpg';
import men_banner from './Components/Assets/m1.jpg';
import furniture_banner from './Components/Assets/f1.jpg';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory banner={men_banner} category="mens" />} />
          <Route path="/womens" element={<ShopCategory banner={women_banner} category="womens" />} />
          <Route path="/furniture" element={<ShopCategory banner={furniture_banner} category="furniture" />} />
          <Route path="/support" element={<CustomerSupport />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;