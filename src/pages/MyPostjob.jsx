import React, { useEffect, useState } from 'react';
import useAuth from '../Provider/useAuth';
import { Link } from 'react-router-dom';
import axios from 'axios';
const MyPostjob = () => {

    const [jobs, setJobs] = useState([]);
    const [refetch, setFetch] = useState(false);
    const [loding, setLoding] = useState(false);

    const { user } = useAuth();

    const [company_logo, title, _id] = jobs;

    useEffect(() => {
         document.title = "My Posts | Job Portal"
        const fetchJobs = async () => {
            try {
                setLoding(true);
                const response = await axios.get(`https://job-portal-nu-seven-88.vercel.app/jobspost?email=${user.email}`, {
                    withCredentials: true
                });
                setJobs(response.data);
            } catch (error) {
                console.error('Error fetching jobs:', error);
            } finally {
                setLoding(false);
            }
        };

        if (user?.email) {
            fetchJobs();
        }
    }, [user.email, refetch]);


    const deletepost = async (id) => {
        try {
            const response = await axios.delete(`https://job-portal-nu-seven-88.vercel.app/post-delete/${id}?email=${user.email}`, {
                withCredentials: true
            });

            if (response.status === 200) {
                console.log("✅ Post deleted successfully");
                setFetch(!refetch)

            }
        } catch (error) {
            console.error("❌ Failed to delete post:", error.response?.data?.message || error.message);
        }
    };




    if (loding) {
        return (
            <div className='flex justify-center' > <span className="loading loading-spinner text-center text-info"></span></div>
        )
    }


    return (
        <div>

      

        <div>
               {
                jobs && jobs.length > 0 ? (
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>

                                    <th>Name</th>
                                    <th>Action</th>
                                    <th>applycount</th>
                                    <th>View</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>


                                {
                                    jobs.map((job, index) =>
                                        <tr key={index}>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle h-12 w-12">
                                                            <img
                                                                src={job.company_logo}
                                                                alt={job.title} />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">{job.title}</div>
                                                        <div className="text-sm opacity-50">{job.location}</div>
                                                    </div>
                                                </div>
                                            </td>

                                            <td><button onClick={() => deletepost(job._id)} className='btn '>delete</button></td>
                                            <td>{job.applycount}</td>
                                            <th>
                                                <Link to={`/viewJob/${job._id}`}>  <button className="btn btn-active btn-xs">View</button></Link>
                                            </th>
                                        </tr>
                                    )
                                }


                            </tbody>

                        </table>
                    </div>) : (<h1 className='text-center'>Data Is Not Fund</h1>)
            }
            
            </div> 
            


        </div>
    );
};

export default MyPostjob;