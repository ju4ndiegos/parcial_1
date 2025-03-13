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
        <Route path="/" element={<Login />}>
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<Detail d={'menu'} />} />
          <Route path="/store" element={<Detail d={'store'} />} />
          <Route path="/chart" element={<Detail d={'chart'} />} />
        </Route>
      </Routes>
    </BrowserRouter>

    <Home></Home>

    <Detail d={'chart'} />
    <Detail d={'store'} />
    <Detail d={'menu'} />
      
    </div>
  );
}


export default App;
