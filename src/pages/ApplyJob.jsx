import React from 'react';
import Animation from '../assets/Register-anim/register-anim.json'
import Lottie from 'lottie-react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import applyjob from '../assets/Register-anim/applyjob.json'
import useAuth from '../Provider/useAuth';

const ApplyJob = () => {
    const { user } = useAuth();
    const { id } = useParams();

    const navigate = useNavigate();

    console.log(user,id)

    const handleApply = e => {
        e.preventDefault();
        const form = e.target;
        const linkdin = form.linkdin.value;
        const github = form.github.value;
        const resume = form.resume.value;
        const checkbox = form.checkbox.checked;

        // console.log(checkbox, linkdin)
        if (!checkbox) {
            alert("Please check the checkbox to proceed!");
            return;
        }

        const jobapplication = {
            job_id : id,
            applicant_email : user.email,
            linkdin,
            github,
            resume
        }

        console.log(jobapplication)

        fetch('http://localhost:5000/job-application',{
            method:'post',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(jobapplication)

        }).then(res=>{
            console.log(res)
            navigate('/myApplications')
        }).catch(er=>{
            console.log(er)
        })

    }

    return (
        <div className='min-h-[calc(100vh-295px)] content-center'>

            <div className="hero  min-h-full">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl font-bold">Apply now!</h1>
                        <div className='w-96'>
                            <Lottie animationData={applyjob}></Lottie>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleApply}>


                                <fieldset className="fieldset">
                                    <label className="fieldset-label">Linkd IN Url</label>
                                    <input type="url" className="input" name='linkdin' required placeholder="Linkd IN Url" />
                                    <label className="fieldset-label">Github Url</label>
                                    <input type="url" className="input" required name='github' placeholder="Github Url" />
                                    <label className="fieldset-label">Resume Url</label>
                                    <input type="url" className="input" required name='resume' placeholder="Resume Url" />

                                    <label className="fieldset-label">
                                        <input type="checkbox" name='checkbox' className="checkbox" />
                                        Remember me
                                    </label>
                                    <button className="btn btn-neutral mt-4">Apply</button>

                                </fieldset>
                            </form>
                            <p> No Account?<Link to='/register'> Create one!</Link></p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApplyJob;