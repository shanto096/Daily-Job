import React from 'react';
import { Link } from 'react-router-dom';

const Feature = ({feature}) => {
    const {jobIcon,jobName,jobCategory,location,locationIcon,salary,salaryIcon,R,F} = feature;
    return (
        <div className=' border-2 border-slate-400 py-4 pl-10 rounded-md '>
            <img src={jobIcon} alt="" />
            <h1 className='my-2 text-xl font-bold text-slate-700'>{jobCategory}</h1>
            <h3>{jobName}</h3>
            <p className='my-2'><span className='border-2 border-slate-300 p-1 mr-2 rounded-sm'>{R}</span><span className='border-2 border-slate-300 p-1 mr-2 rounded-sm'>{F}</span></p>
            <div className='flex my-2'>
              <div className='flex mr-4'>
              <img src={locationIcon} alt="" />
               <p><span>{location}</span></p>
              </div>
              <div className='flex'>
                <img src={salaryIcon} alt="" /> 
                <p><span>{salary}</span></p>
              </div>
            </div>
            <Link to='/Apliy' state={{ data: feature }}><button className='bg-yellow-400 p-2 rounded-md font-bold text-white '>View Details</button></Link>
            
        </div>
    );
};

export default Feature;