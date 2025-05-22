import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import My_Profile from "./Pages/My_Profile"
import Navbar from "./Components/Navbar";
import Cse from "./Branches/Cse";
import Ece from "./Branches/Ece";
import EEE from "./Branches/EEE";
import Mech from "./Branches/Mech";
import Allpdfs from "./Branches/Allpdfs";
import Login from "./Components/Login";
import ProtectedRoute from "./Components/ProtectedRoutes";

const App = () => {
  return (
    <div className=" ">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={ <ProtectedRoute> <Home /> </ProtectedRoute> } />
          <Route path="/about" element={<About />} />
          <Route path="/cse" element={<Cse />} />
          <Route path="/ece" element={<Ece />} />
          <Route path="/eee" element={<EEE />} />
          <Route path="/mech" element={<Mech />} />
          <Route path="/allpdfs" element={<ProtectedRoute><Allpdfs /></ProtectedRoute>} />
          <Route path= "/login" element = {<Login/>} />
          <Route path = "/myprofile" element = {<ProtectedRoute><My_Profile/></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
