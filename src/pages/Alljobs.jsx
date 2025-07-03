
import { useEffect, useState } from 'react';
import JobCard from '../components/JobCard';
import  axios  from 'axios';


const Alljobs = () => {

    const [jobs ,setJobs] = useState([]);
    const [sort,setSort] = useState(false);
    const [search,setSearch] = useState("");
    const [minsalary,setminsalary] = useState();
    const [maxsalary,setmaxsalary] = useState();

useEffect(()=>{
    axios.get(`https://job-portal-nu-seven-88.vercel.app/jobs?sort=${sort}&search=${search}&min${minsalary}&max=${maxsalary}`)
    .then(res=>setJobs(res.data))
},[sort,search,maxsalary,minsalary])


const handlesearch = (e) =>{
    setSearch(e)
}
const handlemin = (e) =>{
    setminsalary(e)
}
const handlemax = (e) =>{
    setmaxsalary(e)
}


    return (
        <div>
            <h1 className='text-3xl text-center py-3 m-5 p-5'>All Jobs</h1>

            <div className='bg-base-200'>
                <button onClick={()=>setSort(!sort)} className={`btn m-5 text-xl ${sort? 'btn-success':' btn-neutral'}`}>{sort?"Sorted By Salary":"Sort By Salary"}</button>
               <input onChange={(e)=>handlesearch(e.target.value)} type="text" className='input ' placeholder='Search here..' />
               <input onChange={(e)=>handlemin(e.target.value)}  type="number" className='input w-24 mx-6' placeholder='Min Salary' />
               <input onChange={(e)=>handlemax(e.target.value)}   type="number" className='input w-24' placeholder='Max Salary' />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
            {
                jobs.map(job=><JobCard key={job._id} job={job}></JobCard>)
            }
            </div> 

        </div>
    );
};

export default Alljobs;