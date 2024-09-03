import React from 'react';
import dayjs from 'dayjs';

function JobCard(props) {
    const skills = ["Javascript", "React", "Nodejs"];
    const date1 = dayjs(Date.now());
    const diffInDays = date1.diff(props.postedOn, 'day');

    return (
        <div className='w-full md:w-80 lg:w-96 mx-2 my-4'>
            <div className='flex flex-col justify-between px-6 py-4 bg-zinc-200 rounded-md border border-black shadow-lg hover:border-blue-500 hover:translate-y-1 hover:scale-103 transition-transform'>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-lg font-semibold'>{props.title} - {props.company}</h1>
                    <p>{props.type} &#x2002; {props.experience} &#x2002; {props.location}</p>
                    <div className='flex flex-wrap gap-2'>
                        {props.skills.map((skill, index) => (
                            <p key={index} className='text-gray-500 py-1 px-2 rounded-md border border-black'>{skill}</p>
                        ))}
                    </div>
                </div>
                <div className='flex items-center justify-between mt-4'>
                    <p className='text-gray-500'>Posted {diffInDays > 1 ? `${diffInDays} days` : `${diffInDays} day`} ago</p>
                    <a href={props.job_link} target="_blank" rel="noopener noreferrer">
                        <button className='text-blue-500 border border-blue-500 px-4 py-2 rounded-md'>Apply</button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default JobCard;
