import { useEffect, useState } from 'react';
import JobCard from '../components/JobCard';
import axios from 'axios';
import Card from '../components/Card';

const Alljobs = () => {
    const [jobs, setJobs] = useState([]);

    const [search, setSearch] = useState("");
    const [minsalary, setMinSalary] = useState();
    const [maxsalary, setMaxSalary] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const params = {};
        if (search) params.search = search;
        if (minsalary !== undefined && minsalary !== "") params.min = minsalary;
        if (maxsalary !== undefined && maxsalary !== "") params.max = maxsalary;

        axios.get("https://job-portal-nu-seven-88.vercel.app/jobs", { params })
            .then(res => setJobs(res.data))
            .catch(err => console.error("Error fetching jobs:", err))
            .finally(() => setLoading(false)); // ✅ Always runs at the end
    }, [search, minsalary, maxsalary]);


    const handleSearch = (e) => {
        setSearch(e);
    };

    const handleMin = (e) => {
        const value = e.target.value;
        setMinSalary(value ? parseInt(value) : undefined);
    };

    const handleMax = (e) => {
        const value = e.target.value;
        setMaxSalary(value ? parseInt(value) : undefined);
    };


    if (loading) {
        return (<div className='flex justify-center' > <span className="loading loading-spinner text-center text-info"></span></div>)
    }



    return (
        <div>


            <div className='bg-base-200 p-4 flex flex-wrap gap-4 items-center justify-center'>
                <input
                    onChange={(e) => handleSearch(e.target.value)}
                    type="text"
                    className='input input-bordered'
                    placeholder='Search by Title or location '
                />
                <input
                    onChange={handleMin}
                    type="number"
                    className='input input-bordered w-28'
                    placeholder='Min Salary'
                />

                <input
                    onChange={handleMax}
                    type="number"
                    className='input input-bordered w-28'
                    placeholder='Max Salary'
                />
            </div>



            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-3 gap-4 mt-6'>
                {
                    jobs.length > 0 ? jobs.map(job => (
                        <Card key={job._id} job={job} />
                    )) : (
                        <p className="text-center col-span-full text-lg text-gray-500">No jobs found.</p>
                    )
                }
            </div>
        </div>
    );
};

export default Alljobs;
