import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Mainlayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-290px)] '>

            <Outlet></Outlet>
          </div>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;