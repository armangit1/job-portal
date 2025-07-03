import Lottie from 'lottie-react';
import React, { useContext, useState } from 'react';
import Animation from '../assets/Register-anim/register-anim.json'
import AuthContext from '../Context/AuthContext';
import { Link } from 'react-router-dom';
import GoogleLoginButton from '../Context/GoogleLoginButton';
import axios from 'axios';




const Register = () => {

    const { createuser } = useContext(AuthContext);

    const [error, SetError] = useState('');
    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const user = { name, email, password }
        SetError('');
        console.log(user);
        const regex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
        if (regex.test(password)) {
            console.log('password is ok')
        } else {
            SetError('Make Stong Password!')
            return
        }
        if (name) {
            console.log('neme is ok');
        } else {
            SetError('Set a Name')
            return
        }
        if (email) {
            console.log('neme is ok');
        } else {
            SetError('Set a Email')
            return;
        }
        SetError('User Create Successfully!')

        createuser(email, password)
            .then(res => {
                console.log(res);

            })
            .catch(er => {
                console.log(er);
            })
    }

    return (
        <div className='min-h-[calc(100vh-295px)] content-center'>
            <h1 className='text-2xl text-red-400 text-center'>{error}</h1>

            <div className="hero  min-h-full ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl font-bold">Register now!</h1>
                        <div className='w-96'>
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