import React from "react";
import Login from "./Components/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import Signup from "./Components/Signup";


function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
    </Routes>

  )
}

export default App;
