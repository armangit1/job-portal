import React, { useEffect, useState } from 'react';
import JobCard from './JobCard';
import { Link } from 'react-router-dom';

const HotJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(false); // fixed typo: loding -> loading

    useEffect(() => {
        const fetchJobs = async () => {
            setLoading(true);
            try {
                const res = await fetch('https://job-portal-nu-seven-88.vercel.app/jobs');
                const data = await res.json();
                setJobs(data);
            } catch (error) {
                console.error("Error fetching hot jobs:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchJobs();
    }, []);

    if (loading) {
        return <h1>Loading...</h1>; // fixed typo: Loding -> Loading
    }

    return (
        jobs.length > 0 ? (
            <div>
                <h1 className='text-5xl my-5 p-2'>Hot Jobs</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {jobs.map(job => (
                        <JobCard key={job._id} job={job} />
                    ))}
                </div>

                <div className='flex justify-center'>
                    <Link to="/jobs" className='text-2xl p-2 m-5 rounded-2xl bg-pink-500'>
                        View All Jobs
                    </Link>
                </div>
            </div>
        ) : (
            <h1>No data found</h1>
        )
    );
};

export default HotJobs;
