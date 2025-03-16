import './App.css';
import Login from './pages/login.js'
import Home from './pages/home.js';
import Detail from './pages/detail.js';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">

    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<Detail d={'menu'} />} />
          <Route path="/store" element={<Detail d={'stores'} />} />
          <Route path="/cart" element={<Detail d={'cart'} />} />
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}


export default App;
