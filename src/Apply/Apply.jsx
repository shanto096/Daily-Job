import React from 'react';
import { Link } from 'react-router-dom';

const Apply = ({apply,d}) => {
    const {jobIcon,jobCategory,jobName,locationIcon,location,salaryIcon,salary,R,F}= apply;
    return (
        <div className='grid grid-cols-3 mx-80 items-center border-2 border-slate-400 py-2   rounded-md '>
            <div className='bg-yellow-50 ml-4 mr-7 p-14 rounded-md border-2 border-slate-300'>
                 <img className='' src={jobIcon} alt="" />
            </div>
            <div>
            <h1 className='my-5 text-xl font-bold text-slate-700'>{jobCategory}</h1>
            <h3>{jobName}</h3>
            <p className='my-2'><span className='border-2 border-slate-300 p-1 mr-2 rounded-sm'>{R}</span><span className='border-2 border-slate-300 p-1 mr-2 rounded-sm'>{F}</span></p>
            <div className='flex my-3'>
              <div className='flex mr-4'>
              <img src={locationIcon} alt="" />
               <p><span>{location}</span></p>
              </div>
              <div className='flex'>
                <img src={salaryIcon} alt="" /> 
                <p><span>{salary}</span></p>
              </div>
            </div>
            </div>
            <div className='ml-32'>
            <Link><button className='bg-yellow-400 p-3 text-xl rounded-md font-bold text-white '>View Details</button></Link>
            </div>
            
            
        </div>
    );
};

export default Apply;