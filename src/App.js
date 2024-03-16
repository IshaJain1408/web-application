import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import Classes from './Pages/Classes/Classes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Pages/AboutUs/About';
import AuthPage from './Pages/Auth/AuthPage';
import Cart from './Pages/Cart/Cart';
import Profile from './Pages/Profile/Profile';

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
