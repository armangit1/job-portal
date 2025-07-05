import React, { useContext } from "react";
import { motion } from "motion/react"
import { Link } from "react-router-dom";
import AuthContext from "../Context/AuthContext";
import img from "../../src/assets/react.svg"

const JobCard = ({ job }) => {
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
     
    } = job;

    


    return (
        <Link to={`/JobDetails/${_id}`}>
      
        <motion.div className="max-w-xl mx-auto p-6 bg-white rounded-2xl  shadow-md border border-gray-200"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 1.05 }}
          
        >
            <div className="flex items-center gap-4 mb-4">
                <img
                    src={ job.company_logo? job.company_logo : img }
                    alt="Company Logo"
                    className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                    <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
                    <p className="text-sm text-gray-500">{location}</p>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                    <p className="text-sm text-gray-500">Job Type</p>
                    <p className="text-base text-gray-700">{jobType}</p>
                   
                </div>
                <div>
                    <p className="text-sm text-gray-500">{category}</p>
                    <p className="text-base text-gray-700">{company}</p>
                </div>
                <div>
                    <p className="text-sm text-gray-500">Salary</p>
                    <p className="text-base text-gray-700">৳{salaryRange?.min} - ৳{salaryRange?.max}</p>
                </div>
                <div>
                    <p className="text-sm text-gray-500">Deadline</p>
                    <p className="text-base text-red-600 font-semibold">{applicationDeadline}</p>
                </div>
            </div>
            <div className="mb-4">
                <p className="text-sm text-gray-500 mb-1">Description</p>
                <p className="text-gray-700 text-sm  description">
                    {description}
                </p>
            </div>
      
     
          
        </motion.div>
        </Link>
    );
};

export default JobCard;
