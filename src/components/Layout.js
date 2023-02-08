import React from 'react'
import Blogs from './Blogs';
import ConnectedCustomer from './ConnectedCustomer';
import ConnectOne from './ConnectOne';
import ConnectTwo from './ConnectTwo';
import ContactUs from './ContactUs';
import Customer from './Customer';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Service from './Service';

function Layout() {
  return (
    <>
      <Header />
      <Home />
      <Service />
      <ConnectOne />
      <ConnectTwo />
      <Customer />
      <ConnectedCustomer />
      <Blogs />
      <ContactUs />
      <Footer />
    </> 
)
}

export default Layout;