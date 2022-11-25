import { useState } from "react";
import "./App.css";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import { Routes, Route, useLocation, matchRoutes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Pages
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Bantuan from "./Pages/Bantuan";
import DetailBantuan from './Pages/DetailBantuan'
import StatusBantuan from './Pages/StatusBantuan'
import LengkapiDokumen from './Pages/LengkapiDokumen'
import Profile from "./Pages/Profile";

function App() {
  const [count, setCount] = useState(0);

  const lokasi = useLocation(
  )
  console.log(lokasi)

  // function getCurrentPage() {
  // const location = useLocation()
  // const [{ route }] = matchRoutes(routes, location)

  // return route.path

  // }

  return (
    <>
    {/* {lokasi?.path !== "/Register" } */}
      <NavBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Bantuan' element={<Bantuan />} />
        <Route path='/DetailBantuan' element={<DetailBantuan />} />
        <Route path='/LengkapiDokumen' element={<LengkapiDokumen />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />}/>
        <Route path='/Profile' element={<Profile />} />
        <Route path='/StatusBantuan' element={<StatusBantuan />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
