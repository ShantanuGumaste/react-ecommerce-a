import './App.css';
import Header from './Components/Home/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Support from './Components/Support';
import Products from './Components/Products/Products';
import CartItem from "./Components/CartItem";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<CartItem image="logo192.png" name="Full stack course with react.js" desc="react is a frontend javascript library" price="12.99" qty="2"/>} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
