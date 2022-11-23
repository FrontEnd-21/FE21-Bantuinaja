import { useState } from "react";
import "./App.css";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Pages
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Bantuan from "./Pages/Bantuan";
import DetailBantuan from "./Pages/DetailBantuan";
import LengkapiDokumen from "./Pages/LengkapiDokumen";
import StatusBantuan from "./Pages/StatusBantuan";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Bantuan' element={<Bantuan />} />
        <Route path='/DetailBantuan' element={<DetailBantuan />} />
        <Route path='/LengkapiDokumen' element={<LengkapiDokumen />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/StatusBantuan' element={<StatusBantuan />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
