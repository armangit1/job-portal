import Lottie from 'lottie-react';
import React, { useContext, useEffect, useState } from 'react';
import Animation from '../assets/Register-anim/register-anim.json'
import AuthContext from '../Context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import GoogleLoginButton from '../Context/GoogleLoginButton';
import axios from 'axios';




const Register = () => {
  const { createuser } = useContext(AuthContext);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value;

    setError('');
    setSuccess('');

    if (!name) {
      setError('Please provide a name.');
      return;
    }

    if (!email) {
      setError('Please provide an email.');
      return;
    }

    if (!password || password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    createuser(email, password)
      .then((res) => {
        console.log('User created:', res.user);
        setSuccess('User created successfully!');

        form.reset();
        navigate('/')
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
      });
  };

  useEffect(()=>{
           document.title = "Register | Job Portal"
      },[])


    return (
        <div className='min-h-[calc(100vh-295px)] content-center'>
            <h1 className='text-2xl text-red-400 text-center'>{error}</h1>

            <div className="hero  min-h-full ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl font-bold">Register now!</h1>
                        <div className='w-96 hidden lg:block'>
                            <Lottie animationData={Animation}></Lottie>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleRegister}>


                                <fieldset className="fieldset">
                                    <label className="fieldset-label">Name</label>
                                    <input type="text" className="input" name='name' placeholder="Name" />
                                    <label className="fieldset-label">Email</label>
                                    <input type="email" className="input" name='email' placeholder="Email" />
                                    <label className="fieldset-label">Password</label>
                                    <input type="password" className="input" name='password' placeholder="Password" />

                                    <button className="btn btn-neutral mt-4">Register</button>

                                </fieldset>

                            </form>
                            <p className=''>Already have an account! <Link to='/login' className='text-stone-950'>Please Login</Link></p>
                            <GoogleLoginButton ></GoogleLoginButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;