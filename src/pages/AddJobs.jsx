import Lottie from 'lottie-react';
import React from 'react';

import applyjob from '../assets/Register-anim/applyjob.json'
import { Link, useNavigate } from 'react-router-dom';
import useAuth from './../Provider/useAuth';
import Swal from 'sweetalert2'

const AddJobs = () => {

    const { user } = useAuth();

    const navigate = useNavigate();


    const handleAddjob = e => {
        e.preventDefault();
        const formdata = new FormData(e.target)
        console.log(formdata)
        const initialData = Object.fromEntries(formdata.entries())
        console.log(initialData)

        const { mins, maxs, currency, ...newJob } = initialData;
        const min = parseInt(mins)
        const max = parseInt(maxs)
        newJob.salaryRange = { min, max, currency }
        newJob.requirements = newJob.requirements.split('\n');
        newJob.responsibilities = newJob.responsibilities.split('\n');
        newJob.hr_email = user.email;

            console.log(newJob)

        fetch('https://job-portal-nu-seven-88.vercel.app/jobs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            }
            ,
            body: JSON.stringify(newJob)
        })
            .then(res => {
                console.log(res)
                if(res.status===200){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                      });
                      navigate('/mypostedJobs')
                }
            })
            .catch(er => {
                console.log(er)
            })
    }


    return (
        <div>
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
                                <form onSubmit={handleAddjob}>

                                    <fieldset className="fieldset">
                                        <label className="fieldset-label">Job Title</label>
                                        <input type="text" className="input" name="title" required placeholder="Job Title" />

                                        <label className="fieldset-label">Job Location</label>
                                        <input type="text" className="input" name="location" required placeholder="Job Location" />

                                        <label className="fieldset-label">Application Deadline</label>
                                        <input type="date" className="input" name="applicationDeadline" required placeholder="Application Deadline" />


                                        <fieldset className="fieldset">
                                            <legend className="fieldset-legend">Job Type</legend>
                                            <select className="select" name="jobType" required>
                                                <option disabled >Select Job Type</option>
                                                <option>Full-time</option>
                                                <option>Part-time</option>
                                                <option>Intern</option>
                                                <option>Remote</option>
                                            </select>
                                        </fieldset>

                                        <fieldset className="fieldset">
                                            <legend className="fieldset-legend">Job Category</legend>
                                            <select className="select" name="category" required>
                                                <option disabled >Select Job Category</option>
                                                <option>Engineering</option>
                                                <option>Design</option>
                                                <option>Finance</option>
                                                <option>Marketing</option>
                                                <option>Development</option>
                                                <option>Teaching</option>
                                                <option>Management</option>
                                            </select>
                                        </fieldset>

                                        <fieldset className="fieldset">
                                            <legend className="fieldset-legend">Salary Range</legend>
                                            <div className="flex gap-2">
                                                <div>
                                                    <label className="fieldset-label">Min</label>
                                                    <input type="number" className="input" name="mins" required placeholder="Min" />
                                                </div>
                                                <div>
                                                    <label className="fieldset-label">Max</label>
                                                    <input type="number" className="input" name="maxs" required placeholder="Max" />
                                                </div>
                                                <div>
                                                    <label className="fieldset-label">Currency</label>
                                                    <select className="select" name="currency" required>
                                                        <option disabled selected value="">Select Currency</option>
                                                        <option>BDT</option>
                                                        <option>USDT</option>
                                                        <option>INR</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </fieldset>

                                        <label className="fieldset-label">Job Description</label>
                                        <textarea name="description" placeholder="Job Description" className="textarea textarea-xs" required></textarea>

                                        <label className="fieldset-label">Requirements</label>
                                        <textarea name="requirements" placeholder="Add Job Requirements" className="textarea textarea-xs" required></textarea>

                                        <label className="fieldset-label">Responsibilities</label>
                                        <textarea name="responsibilities" placeholder="Add Job Responsibilities" className="textarea textarea-xs" required></textarea>

                                        <label className="fieldset-label">Company Logo URL</label>
                                        <input type="url" className="input" name="company_logo" required placeholder="Company Logo URL" />

                                        <label className="fieldset-label">HR Name</label>
                                        <input type="text" className="input" name="hr_name" required placeholder="HR Name" />


                                        <label className="label cursor-pointer">
                                            <input type="checkbox" name="remember" className="checkbox" />
                                            <span className="label-text ml-2">Remember me</span>
                                        </label>

                                        <button type="submit" className="btn btn-neutral mt-4">Apply</button>
                                    </fieldset>

                                </form>

                                <p> No Account? <Link to='/register'> Create one!</Link> </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddJobs;