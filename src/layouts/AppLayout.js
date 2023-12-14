
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen flex flex-col" style={{ backgroundColor: '#202C37' }}>
      <Header />
      <div className='flex-1'>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;



