import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <Helmet>
        <title>Aislin Formulations</title>
        <meta name="description" content="Aislin Formulations - Leading the way in pharmaceutical manufacturing and products." />
        {/* You can add other common meta tags here */}
        <meta name="keywords" content="Aislin Formulations, pharmaceutical, manufacturing, tablets, capsules, syrups" />
      </Helmet>
      
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
