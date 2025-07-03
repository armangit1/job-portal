import React, { useEffect, useState } from 'react';
import useAuth from '../Provider/useAuth';
import { Link } from 'react-router-dom';

const MyPostjob = () => {

    const [jobs,setJobs] = useState([]);

    const {user} = useAuth();

    useEffect(()=>{
    const unsabscraib = fetch(`https://job-portal-nu-seven-88.vercel.app/jobs?email=${user.email}`)
    .then(res=>res.json())
    .then(data=>setJobs(data))
    .catch(er=>{
        console.log(er)
    })

    return ()=>{
        unsabscraib
    }
    },[user.email])

    return (
        <div>
           
           <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                          
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    

                        {
                                jobs.map((job,index)=>
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
                                    <td>
                                        Zemlak, Daniel and Leannon
                                        <br />
                                        <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                    </td>
                                    <td>Purple</td>
                                    <th>
                                      <Link to={`/viewJob/${job._id}`}>  <button  className="btn btn-active btn-xs">View</button></Link>
                                    </th>
                                </tr>
                                )
                        }
                      
                      
                    </tbody>
                  
                </table>
            </div>
        </div>
    );
};

export default MyPostjob;