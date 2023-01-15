import React from "react";
import Login from "./Components/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import Signup from "./Components/Signup";
import Navbar from "./Components/Navbar";
import Nse from "./Components/Nse";
import Bse from "./Components/Bse";
import Stock from "./Components/Stock";


function App() {
  return (
    <>
      {/* <Router> */}
      <Navbar />
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/nse' element={<Nse />}></Route>
        <Route path='/bse' element={<Bse />}></Route>
        <Route path='/stock' element={<Stock />}></Route>
      </Routes>
      {/* </Router> */}
    </>
  )
}

export default App;
