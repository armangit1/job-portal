import Lottie from 'lottie-react';
import React from 'react';

import applyjob from '../assets/Register-anim/applyjob.json'
import { Link, useNavigate } from 'react-router-dom';
import useAuth from './../Provider/useAuth';
import Swal from 'sweetalert2'
import axios from 'axios';

const AddJobs = () => {

    const { user } = useAuth();

    const navigate = useNavigate();


    const handleAddjob = e => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries());

        const { mins, maxs, currency, ...newJob } = initialData;
        const min = parseInt(mins);
        const max = parseInt(maxs);

        newJob.salaryRange = { min, max, currency };
        newJob.requirements = newJob.requirements.split(',');
        newJob.responsibilities = newJob.responsibilities.split(',');
        newJob.hr_email = user.email;

        console.log("New Job Data:", newJob);

        axios.post('https://job-portal-nu-seven-88.vercel.app/jobs', newJob, {
            withCredentials: true, // ✅ Cookie/token send করে
        })
            .then(res => {
                console.log("Job Post Response:", res);
                if (res.status === 200 || res.status === 201) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your job has been posted!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/mypostedJobs');
                }
            })
            .catch(error => {
                console.error("Job Post Error:", error);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong while posting the job!",
                });
            });
    };


    return (
        <div>
            <div className='min-h-[calc(100vh-295px)] content-center'>

                <div className='my-2'>
                    <form onSubmit={handleAddjob} className="max-w-5xl mx-auto p-8 bg-white shadow-xl space-y-10">
                        <h2 className="text-xl font-bold text-center text-gray-800">Post a Job</h2>

                        {/* Basic Job Info */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block mb-1 font-semibold text-gray-700">Job Title</label>
                                <input type="text" name="title" required placeholder="Job Title" className="w-full text-black border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                            <div>
                                <label className="block mb-1 font-semibold text-gray-700">Job Location</label>
                                <input type="text" name="location" required placeholder="Job Location" className="w-full border  text-black border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                            <div>
                                <label className="block mb-1 font-semibold text-gray-700">Application Deadline</label>
                                <input type="date" name="applicationDeadline" required className="w-full text-black border  border-gray-300  p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                            <div>
                                <label className="block mb-1 font-semibold text-gray-700">Job Type</label>
                                <select name="jobType" required className="w-full border border-gray-300 p-2 text-black  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <option disabled selected>Select Job Type</option>
                                    <option>Full-time</option>
                                    <option>Part-time</option>
                                    <option>Intern</option>
                                    <option>Remote</option>
                                </select>
                            </div>
                            <div>
                                <label className="block mb-1 font-semibold text-gray-700">Company Name</label>
                                <input type="text" name="company_name" required placeholder="Company Name" className="w-full text-black border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                            <div>
                                <label className="block mb-1 font-semibold text-gray-700">Job Category</label>
                                <select name="category" required className="w-full border border-gray-300 p-2 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <option disabled selected>Select Job Category</option>
                                    <option>Engineering</option>
                                    <option>Design</option>
                                    <option>Finance</option>
                                    <option>Marketing</option>
                                    <option>Development</option>
                                    <option>Teaching</option>
                                    <option>Management</option>
                                </select>
                            </div>
                            <div>
                                <label className="block mb-1 font-semibold text-gray-700">Company Logo URL</label>
                                <input type="url" name="company_logo" required placeholder="Company Logo URL" className="w-full text-black border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                            <div>
                                <label className="block mb-1 font-semibold text-gray-700">HR Name</label>
                                <input type="text" name="hr_name" required placeholder="HR Name" className="w-full border text-black border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>

                        </div>

                        {/* Salary Section */}
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                            <label className="block mb-2 font-semibold text-gray-800 text-lg">Salary Range</label>
                            <div className="grid grid-cols-1 md:grid-cols-3 text-black gap-4">
                                <div>
                                    <label className="block mb-1 text-gray-600">Min</label>
                                    <input type="number" name="mins" required placeholder="Min" className="w-full border text-black border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                                <div>
                                    <label className="block mb-1 text-gray-600">Max</label>
                                    <input type="number" name="maxs" required placeholder="Max" className="w-full border text-black border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                                <div>
                                    <label className="block mb-1 text-gray-600">Currency</label>
                                    <select name="currency" required className="w-full border border-gray-300 p-2 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        <option disabled selected>Select Currency</option>
                                        <option>BDT</option>
                                        <option>USDT</option>
                                        <option>INR</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Description & Requirements */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block mb-1 font-semibold text-gray-700">Job Description</label>
                                <textarea name="description" required placeholder="Job Description" className="w-full border text-black border-gray-300 p-3 rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                            </div>
                            <div>
                                <label className="block font-medium mb-1">
                                    Requirements <span className="text-gray-500 text-sm">(use commas (,) to separate)</span>
                                </label>                                <textarea name="requirements" required placeholder="Job Requirements" className="w-full border text-black border-gray-300 p-3 rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                            </div>
                            <div className="md:col-span-2">
                                <label className="block font-medium mb-1">
                                    Responsibilities <span className="text-gray-500 text-sm">(use commas(,) to separate)</span>
                                </label>
                                <textarea name="responsibilities" required placeholder="Job Responsibilities" className="w-full text-black border border-gray-300 p-3 rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="text-center">
                            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold py-3 px-12 rounded-lg transition duration-300">
                                Post Job
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddJobs;