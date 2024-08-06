
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import CustomerSupport from './Pages/CustomerSupport';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Shop/>} />
        <Route path="/mens" element={<ShopCategory category = "men"/>} />
        <Route path="/womens" element={<ShopCategory category = "women"/>} />
        <Route path="/furniture" element={<ShopCategory category = "furniture"/>} />
        <Route path="/support" element={<CustomerSupport />} />
        <Route path="/product" element={<Product />}>
          <Route path=":product" element={<Product />}/>
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />
        
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;