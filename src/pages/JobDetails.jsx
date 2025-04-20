import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {

    const lodeJobdata = useLoaderData();
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
  } = lodeJobdata;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-md border border-gray-200 mt-10">
      {/* Header Section */}
      <div className="flex items-center gap-4 mb-6">
        <img
          src={company_logo}
          alt={`${company} Logo`}
          className="w-16 h-16 object-cover rounded-full border"
        />
        <div>
          <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
          <p className="text-gray-600">{company} • {location}</p>
        </div>
      </div>

      {/* Job Info Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm mb-6">
        <div>
          <p className="text-gray-500">Job Type</p>
          <p className="text-gray-700 font-medium">{jobType}</p>
        </div>
        <div>
          <p className="text-gray-500">Category</p>
          <p className="text-gray-700 font-medium">{category}</p>
        </div>
        <div>
          <p className="text-gray-500">Salary Range</p>
          <p className="text-gray-700 font-medium">
            ৳{salaryRange.min} - ৳{salaryRange.max}
          
          </p>
        </div>
        <div>
          <p className="text-gray-500">Deadline</p>
          <p className="text-red-600 font-semibold">{applicationDeadline}</p>
        </div>
        <div>
          <p className="text-gray-500">Status</p>
          <p className="text-gray-700 capitalize">{status}</p>
        </div>
      </div>

      {/* Description */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Job Description</h2>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>

      {/* Requirements */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Requirements</h2>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          {requirements.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Responsibilities */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Responsibilities</h2>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          {responsibilities.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>

      {/* HR Contact */}
      <div className="mt-6 border-t pt-4 flex justify-between ">
       <div>
       <h2 className="text-lg font-semibold text-gray-800 mb-2">Contact Information</h2>
        <p className="text-sm text-gray-700">HR Name: <span className="font-medium">{hr_name}</span></p>
        <p className="text-sm text-gray-700">
          Email: <a href={`mailto:${hr_email}`} className="text-blue-600 hover:underline">{hr_email}</a>
        </p>
       </div>
       <Link to={`/apply-job/${_id}`}className="btn mt-4 btn-primary">Apply Now</Link>
      </div>
    
    </div>
  );
};

export default JobDetails;
