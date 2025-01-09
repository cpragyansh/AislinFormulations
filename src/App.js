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
import Loader from './components/Loader/Loader'; // Import the loader component
import Overview from "./about/Overview";
import Whyaislin from "./about/Whyaislin";
import Management from "./about/Management";
import Mission_vision from "./about/Mission_vision";
import Ayurvedic from "./Products/Ayurvedic";
// import Values from "./about/Values";

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
          <Route path="/ayurvedic" element={<Ayurvedic />} />
          <Route path="/powder" element={<Powder />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/whyaislin" element={<Whyaislin />} />
          <Route path="/Management" element={<Management />} />
          <Route path="/Mission_vision" element={<Mission_vision/>} />

        </Routes>
      )}
      <Footer />
    </div>
  );
}

export default App;
