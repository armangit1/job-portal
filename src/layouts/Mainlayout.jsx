import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const Mainlayout = () => {
    return (
        
     <div className='w-full'>
     <div className='bg-white'> <Navbar></Navbar></div>
           <div className='max-w-[1300px] mx-auto  '>
          
            <div className='min-h-[calc(100vh-290px)] '>

            <Outlet></Outlet>
          </div>
         
        </div>
           <Footer></Footer>
     </div>
    );
};

export default Mainlayout;