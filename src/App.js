import React from "react";
import './App.css'
import { Route, Routes } from "react-router-dom";
// import Dashboard from "./Dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./Dashboard/Dashboard";
import Footer from "./components/Footer/Footer";
import Contact from "./contact/Contact";
import About from "./about/About";
import Manufacturing from "./Manufacturing/Manufacturing";
import Policy from "./Policy/Policy";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />  
      <Route path="/contact" element={<Contact />} />  
      <Route path="/aboutUs" element={<About />} />  
      <Route path="/OurPolicy" element={<Policy />} />  
      <Route path="/Manufacturing" element={<Manufacturing />} />  
       
        {/* Add other routes here */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
