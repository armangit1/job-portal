import React from 'react';
import { useLoaderData } from 'react-router-dom';

const View = () => {

    const data = useLoaderData();

console.log(data);
    const handleUpdate = (e,id) =>{

        const data = {status:e.target.value}

        fetch(`http://localhost:5000/application/${id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>{
            console.log(res)
        })
        .catch(er=>{
            console.log(er)
        })

    }

    return (
        <div>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Email</th>
                            <th>Job</th>
                            <th>Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            data.map((job, index) =>
                                <tr key={index}>
                                    <td>

                                        <div className="font-bold">{job.applicant_email}</div>


                                    </td>
                                    <td>

                                        <h1>{job?.status.status}</h1>


                                    </td>
                                    <td>

                                        <select onChange={(e)=>handleUpdate(e,job._id)} defaultValue={job.status.status || "Select Stetus"} className="select select-sm">
                                            <option disabled>Select Stetus</option>
                                            <option>Under Review</option>
                                            <option>Set Interview</option>
                                            <option>Hired</option>
                                        </select>


                                    </td>

                                </tr>
                            )
                        }


                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default View;