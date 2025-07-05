import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ job }) => {
        const {
        _id,
        title,
        location,
        jobType,
        category,
        applicationDeadline,
        salaryRange,
        description,
        company,
        requirements,
        responsibilities,
        status,
        hr_email,
        hr_name,
        company_logo,
        company_name
     
    } = job;

    return (
        <div className="relative bg-white rounded-xl  p-5 w-full mx-auto text-center">
            {/* FULL TIME Badge */}
            <span className={`absolute top-3 left-3 text-sm ${jobType==="Full-time"? "bg-green-100 text-green-600": ""} ${jobType==="Part-time"? "bg-yellow-100 text-yellow-600": ""} font-semibold px-3 py-1 rounded-full ${jobType==="Intern"? "bg-red-100 text-red-600": ""} ${jobType==="Remote"? "bg-blue-100 text-blue-600": ""}` }>
               {jobType}
            </span>

            {/* Heart Icon */}
            <div className="absolute top-3 right-3  text-">
               
            </div>

            {/* Logo/Image */}
            <div className="flex justify-center my-2">
                <img
                    src={company_logo}
                    alt="Logo"
                    className="w-16 h-16 rounded-full border p-1"
                />
            </div>
            <p className='text-center'> { company_name}</p>

            {/* Title */}
            <h2 className="text-lg font-semibold text-gray-800">{title}</h2>

            {/* Location */}
            <p className="text-sm text-gray-500 mb-4">
               {location}
            </p>
            <p className="text-sm text-gray-500 mb-4">
               {salaryRange.min} -
               {salaryRange.max} {salaryRange.currency}
            </p>

            {/* Apply Button */}
            <Link to={ `/JobDetails/${_id}` }>
               <button className="text-green-600 border border-green-600 px-5 py-2 rounded-full hover:bg-green-600 hover:text-white transition">
                APPLY NOW
            </button>
            </Link>
         
        </div>
    );
};

export default Card;