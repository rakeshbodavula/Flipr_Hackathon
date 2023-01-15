// import React, { useState } from "react";
import Login from "./Components/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import Signup from "./Components/Signup";
import Navbar from "./Components/Navbar";
import Nse from "./Components/Nse";
import Bse from "./Components/Bse";
// import Stock from "./Components/Stock";
import Stock1 from "./Components/Stock1";


function App() {

  return (
    <>
      {/* <Router> */}
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/navbar' element={<Navbar />}></Route>
        <Route path='/nse' element={<Nse />}></Route>
        <Route path='/bse' element={<Bse />}></Route>
        <Route path='/stock' element={<Stock1 />}></Route>
      </Routes>
      {/* </Router> */}
    </>
  )
}

export default App;
