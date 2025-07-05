import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const View = () => {

    const [applications, setApplications] = useState([]);
    const [refetch , setRefetch] = useState(false);

    const param = useParams();

    const id = param.id;





    const handleUpdate = (e, id) => {

        const data = { status: e.target.value }

        axios.put(`https://job-portal-nu-seven-88.vercel.app/application/${id}`, data, {
            withCredentials: true
        })
            .then(res => {
                console.log(res)
                setRefetch(!refetch)
                
            })
            .catch(er => {
                console.log(er)
            })

        // useLoaderData refetch



    }

    useEffect(() => {

        axios.get(`https://job-portal-nu-seven-88.vercel.app/applyed-job/${id}`, {
            withCredentials: true
        })
        .then(res => setApplications(res.data))


    }, [refetch]);


    return (
        <div className="p-4 space-y-4">
            {
                applications && applications.length > 0 ? (
                    <div className="grid gap-4">
                        {
                            applications.map((job, index) => (
                                <div
                                    key={index}
                                    className="bg-white border rounded-lg shadow-sm p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                                >
                                    <div>
                                        <p className="text-sm font-semibold text-gray-700">Name</p>
                                        <p className="text-gray-900">{job?.name}</p>
                                        <p className="text-sm font-semibold  mt-2 text-gray-700">Email</p>
                                        <p className="text-gray-900">{job.applicant_email}</p>
                                    </div>
                                    <div className='flex flex-col'>
                                        <p className="text-sm font-semibold text-gray-700">Links</p>
                                        <a href={job.resume} className="text-blue-500 hover:text-blue-600 ">{job.resume ? "Resume" : ""}</a>
                                        <a href={job.linkdin} className="text-blue-500 hover:text-blue-600">{job.linkdin ? "Linkdin" : ""}</a>
                                        <a href={job.github} className="text-blue-500 hover:text-blue-600">{job.github ? "Github" : ""}</a>

                                    </div>

                                    <div>
                                        <p className="text-sm font-semibold text-gray-700">Job Status</p>
                                        <p className="text-gray-900">{job?.status?.status || 'panding'}</p>
                                    </div>

                                    <div>
                                        <p className="text-sm font-semibold text-gray-700 mb-1">Action</p>
                                        <select
                                            onChange={(e) => handleUpdate(e, job._id)}
                                            defaultValue={job?.status?.status || "Select Stetus"}
                                            className="select select-sm w-full max-w-xs"
                                        >
                                            <option disabled defaultValue={'Select Stetus'}>Select Stetus</option>
                                            <option value="panding">Is Pending</option>
                                            <option value="Under Review">Under Review</option>
                                            <option value="Set Interview">Set Interview</option>
                                            <option value="Hired">Hired</option>
                                        </select>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                ) : (
                    <p className="text-center text-gray-500">No applications found.</p>
                )
            }
        </div>

    );
};

export default View;