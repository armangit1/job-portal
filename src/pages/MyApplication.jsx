import React, { useEffect, useState } from 'react';
import useAuth from '../Provider/useAuth';
import useAxios from '../Provider/useAxios.jsx';
import axios from 'axios';


const MyApplication = () => {

    const [application, setApplication] = useState([]);
    const axiosSecure = useAxios();

    const { user } = useAuth();

    const [loding , setLoding] = useState(true);

    // fetch(`https://job-portal-nu-seven-88.vercel.app/applied-job?email=${user.email}`)
    // .then(res => res.json())
    // .then(data => setApplication(data))
    // .catch(er => console.log(er))

     

    useEffect(() => {
          document.title = "My Applications | Job Portal"
        const unsubscraib = axiosSecure.get(`/applied-job?email=${user.email}`)
        .then(res =>{
            setApplication(res.data)
            setLoding(false)
        })

        return () => { unsubscraib }
    }, [user.email])


    const handleDelete = id =>{

        axios.delete(`https://job-portal-nu-seven-88.vercel.app/application/${id}?email=${user.email}`,
            {
           withCredentials:true
        })
        .then(res=>{
          const  newapplication =  application.filter(appl=>appl._id != id);
          setApplication(newapplication)
        })
        .catch(er=>{
            console.log(er)
        })

    }


if(loding){
    return <div className='flex justify-center' > <span className="loading loading-spinner text-center text-info"></span></div>
   
    
}
    if(application.length<=0){
        return <div className='content-center'>
     <h1 className='text-center'>No Data Fund!</h1>

        </div>
    }

    return (
        <div>

          

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                          
                            <th>Company</th>
                            <th>Location</th>
                            
                            <th>State</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    

                        {
                                application.map((appli,index)=>
                                    <tr key={index}>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={appli.company_logo}
                                                        alt={appli.title} />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{appli.title}</div>
                                                <div className="text-sm opacity-50">{appli.company_name}</div>
                                            </div>
                                        </div>
                                    </td>
                                   
                                    <td>{appli?.location}</td>
                                    <td>{appli?.status?.status}</td>
                                    <th>
                                        <button onClick={()=>handleDelete(appli._id)} className="btn btn-active btn-xs">Delete</button>
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

export default MyApplication;