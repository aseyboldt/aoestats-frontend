import React from 'react';
import PropTypes from 'prop-types';

import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children, location, filter = {} }) => {
  return (
    <div className="bg-grays-dark text-white min-h-screen flex flex-col items-center">
      <Navbar location={location} filter={filter} />
      <div className="w-full max-w-screen-lg p-2">
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
