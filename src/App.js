import React, { useState, useEffect } from "react";
import './App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./Dashboard/Dashboard";
import Footer from "./components/Footer/Footer";
import Contact from "./contact/Contact";
import About from "./about/About";
import Manufacturing from "./Manufacturing/Manufacturing";
import Policy from "./Policy/Policy";
import Products from "./Products/Products";
import Tablets from "./Products/Tablets";
import Capsules from "./Products/Capsules";
import Syrups from "./Products/Syrups";
import Sachets from "./Products/Sachets";
import Powder from "./Products/Powder";
import Quality from "./Policy/Quality";
import Safety from "./Policy/Safety";
import companyOverview from "./about/companyOverview";
import Loader from './components/Loader/Loader'; // Import the loader component

function App() {
  const [isLoading, setIsLoading] = useState(true); // Loading state

  // Simulate loading process (e.g., fetching data, etc.)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // Set loading to false after 5 seconds
    }, 5000); // Adjust the time as needed
  }, []);

  return (
    <div className="App">
      <Navbar />
      {/* Show Loader while loading */}
      {isLoading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutUs" element={<About />} />
          <Route path="/OurPolicy" element={<Policy />} />
          <Route path="/Manufacturing" element={<Manufacturing />} />
          <Route path="/products" element={<Products />} />
          <Route path="/tablets" element={<Tablets />} />
          <Route path="/capsules" element={<Capsules />} />
          <Route path="/syrups" element={<Syrups />} />
          <Route path="/sachets" element={<Sachets />} />
          <Route path="/powder" element={<Powder />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/companyOverview" element={<companyOverview />} />
        </Routes>
      )}
      <Footer />
    </div>
  );
}

export default App;
