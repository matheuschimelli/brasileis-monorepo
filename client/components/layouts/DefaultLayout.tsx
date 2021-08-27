/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
import React from 'react';
import NavBar from '../NavBar/index';
import Footer from '../Footer/index';

const DefaultLayout: React.FC = ({ children }) => (
  <>
    <NavBar />
    {children}
    <Footer />
  </>
);

export default DefaultLayout;
