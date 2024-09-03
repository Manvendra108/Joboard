import React, { useState } from 'react';

function SearchBar(props) {
    const [jobCriteria, setJobCriteria] = useState({
        title: "",
        location: "",
        experience: "",
        type: ""
    });

    const handleChange = (e) => {
        setJobCriteria((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const search = async () => {
        await props.fetchJobsCustom(jobCriteria);
    };

    return (
        <div className='flex flex-col gap-4 my-10 px-4 sm:px-6 md:px-10 lg:px-20'>
            <div className='flex flex-col md:flex-row gap-4 items-center'>
                <div className='flex-1 flex flex-col md:flex-row gap-4'>
                    <select onChange={handleChange} name="title" value={jobCriteria.title} className='w-full md:w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
                        <option value="" disabled hidden>Job Role</option>
                        <option value="iOS Developer">iOS Developer</option>
                        <option value="Frontend Developer">Frontend Developer</option>
                        <option value="Backend Developer">Backend Developer</option>
                        <option value="Android Developer">Android Developer</option>
                        <option value="Developer Advocate">Developer Advocate</option>
                    </select>
                    <select onChange={handleChange} name="type" value={jobCriteria.type} className='w-full md:w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
                        <option value="" disabled hidden>Job Type</option>
                        <option value="Full Time">Full Time</option>
                        <option value="Part Time">Part Time</option>
                        <option value="Contract">Contract</option>
                    </select>
                    <select onChange={handleChange} name="location" value={jobCriteria.location} className='w-full md:w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
                        <option value="" disabled hidden>Location</option>
                        <option value="Remote">Remote</option>
                        <option value="In-Office">In-Office</option>
                        <option value="Hybrid">Hybrid</option>
                    </select>
                    <select onChange={handleChange} name="experience" value={jobCriteria.experience} className='w-full md:w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
                        <option value="" disabled hidden>Experience</option>
                        <option value="Fresher">Fresher</option>
                        <option value="Junior Level">Junior Level</option>
                        <option value="Mid Level">Mid Level</option>
                        <option value="Senior Level">Senior Level</option>
                    </select>
                </div>
                <button onClick={search} className='w-full md:w-32 bg-blue-500 text-white font-bold py-3 rounded-md'>
                    Search
                </button>
            </div>
        </div>
    );
}

export default SearchBar;
