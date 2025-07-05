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

    console.log(user, id)

    const handleApply = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
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
            job_id: id,
            name,
            applicant_email: user.email,
            linkdin,
            github,
            resume,
            state: "panding"
        }

        console.log(jobapplication)

        fetch('https://job-portal-nu-seven-88.vercel.app/job-application', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(jobapplication)

        }).then(res => {
            console.log(res)
            navigate('/myApplications')
        }).catch(er => {
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
                                    <label className="fieldset-label">Name</label>
                                    <input type="text" className="input" name='name' required placeholder="Enter Name" />
                                    <label className="fieldset-label">Linkd IN Url</label>
                                    <input type="url" className="input" name='linkdin' required placeholder="Linkd IN Url" />
                                    <label className="fieldset-label">Github Url</label>
                                    <input type="url" className="input" required name='github' placeholder="Github Url" />
                                    <label className="fieldset-label">Resume Url</label>
                                    <input type="url" className="input" required name='resume' placeholder="Resume Url" />

                                    <div className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            name="checkbox"
                                            id="policy"
                                            className="checkbox"
                                            required
                                        />
                                        <label htmlFor="policy" className="text-sm text-gray-700">
                                            Accept Privacy Policy
                                        </label>
                                    </div>

                                    <button className="btn btn-neutral mt-4">Apply</button>

                                </fieldset>
                            </form>
                          

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApplyJob;