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
import data from '../data';

function Layout() {
  return (
    <>
      <Header headerData = {data.header} />
      <Home  homeData= {data.home}/>
      <Service servicesData = {data.services} />
      <ConnectOne connectOneData = {data.connectOne} />
      <ConnectTwo connectTwoData = {data.connectTwo} />
      <Customer  customersData = {data.customer}/>
      <ConnectedCustomer connectedCustomersData = {data.connectedCustomer} />
      <Blogs />
      <ContactUs />
      <Footer />
    </> 
)
}

export default Layout;