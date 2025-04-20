import Lottie, { useLottie } from 'lottie-react';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Animation from '../assets/Register-anim/register-anim.json'
import AuthContext from '../Context/AuthContext';
import GoogleLoginButton from '../Context/GoogleLoginButton';

const Signin = () => {
    const [error, setError] = useState('');
    const { signinUser, setLoding } = useContext(AuthContext);

    const location = useLocation();

    const from = location?.state || '/';

    const navigat = useNavigate();


    console.log(from);

    const handleSignin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        setError('');;
        const regex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
        if (regex.test(password)) {
            console.log('password is ok')
        } else {
            setError('Password is uncaret!')
            return
        }
        setLoding(true)
        if (email) {
            console.log('');
        } else {
            setError('give a Email')
            return;
        }
        signinUser(email, password)

            .then(res => {
                console.log(res)
                setLoding(false);
                navigat(from);
            })
            .catch(er => {
                console.log(er)
                setError('uncarect email or password')
                setLoding(false);
            })

    }
    return (
        <div className='min-h-[calc(100vh-295px)] content-center'>
            <h1 className='text-2xl text-red-400 text-center'>{error}</h1>
            <div className="hero  min-h-full">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl font-bold">Login now!</h1>
                        <div className='w-96'>
                            <Lottie animationData={Animation}></Lottie>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleSignin}>


                                <fieldset className="fieldset">
                                    <label className="fieldset-label">Email</label>
                                    <input type="email" className="input" name='email' placeholder="Email" />
                                    <label className="fieldset-label">Password</label>
                                    <input type="password" className="input" name='password' placeholder="Password" />

                                    <button className="btn btn-neutral mt-4">Login</button>

                                </fieldset>
                            </form>
                            <p> No Account?<Link to='/register' state={from}> Create one!</Link></p>
                         <GoogleLoginButton navigat={{from}}></GoogleLoginButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;