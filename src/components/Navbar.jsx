import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../Context/AuthContext';
import { signOut } from 'firebase/auth';
import auth from '../firebase';
import { IoAddCircleSharp } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import { CiLogin } from "react-icons/ci";



const Navbar = () => {
    const { user, loding } = useContext(AuthContext);

    const logout = () => {
        signOut(auth).then(res => console.log(res)).catch(er => console.log(er))
    }
    const navitem = <>
   
        <li><NavLink to='/'>Home</NavLink></li>
       
        <li><NavLink to='/myApplications'> My Applications</NavLink></li>
       
        <li><NavLink to='/mypostedJobs'>My Post</NavLink></li>
         <button className=' md:ml-2'><NavLink to='/addjob' className=' inline-flex items-center text-green-500'><IoAddCircleSharp className='text-xl m-1'></IoAddCircleSharp> POST A JOB</NavLink></button>

    </>
    return (

        
      <div className='max-w-[1500px] mx-auto bg-white'>
          <div className="navbar  ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navitem}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-2xl text-pink-500 font-bold">Job Portal</Link >
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navitem}
                </ul>
            </div>
            <div className="navbar-end">
                
          

                {
                    loding ? <><button className='btn bg-blue-300'><span className="loading loading-spinner text-info"></span></button></> : user ? (
                        <button onClick={logout} className='btn bg-blue-700 text-white border-0'><IoMdLogOut />Log out</button>
                    ) : (
                        <Link to="/register" className="btn bg-blue-500 border-0 text-white"><CiLogin />Sign In</Link>
                    )
                }


            </div>

        </div>
      </div>
    );
};

export default Navbar;