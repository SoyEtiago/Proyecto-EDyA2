import React from 'react';
import NavbarComponente from '../components/Navbar';

function Layout({ children }) {
  return (
    <>
      <NavbarComponente />
      <main>{children}</main>
    </>
  );
}

export default Layout;
