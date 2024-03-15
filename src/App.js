import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Classes from './components/Classes/Classes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/AboutUs/About';
import AuthPage from './components/Auth/AuthPage';
import Cart from './components/Cart/Cart';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/classes" element={<Classes/>} />
          <Route path="/auth" element={<AuthPage/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/profile" element={<Profile/>} />



        </Routes>
      </Router>
    </div>
  );
}

export default App;
