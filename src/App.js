import { useState } from "react";
import "./App.css";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Pages
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Bantuan from "./Pages/Bantuan";
import DetailBantuan from './Pages/detail_bantuan'
import StatusBantuan from './Pages/status_bantuan'
import LengkapiDokumen from './Pages/lengkapi_dokumen'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Bantuan' element={<Bantuan />} />
        <Route path='/detail_bantuan' element={<DetailBantuan />} />
        <Route path='/lengkapi_dokumen' element={<LengkapiDokumen />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />}/>
        <Route path='/status_bantuan' element={<StatusBantuan />} />

      </Routes>

      <Footer />
    </>
  );
}

export default App;
