import React, { useEffect, useState } from 'react';
import JobCard from './JobCard';

const HotJobs = () => {
    const [jobs,setJobs] = useState([])

    useEffect(()=>{
        fetch('https://job-portal-nu-seven-88.vercel.app/jobs')
        .then(res=>res.json())
        .then(data=>setJobs(data))
        .catch(er=>console.log(er))
    },[])
    return (
        <div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
            {
                jobs.map(job=><JobCard key={job._id} job={job}></JobCard>)
            }
            </div>  
        </div>
    );
};

export default HotJobs;