import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { useLocation } from 'react-router-dom'

const JobDetails = () => {
    const location = useLocation()
    const { data } = location.state
    let a = []
     const hendle = ()=> {
        a.push(data)
     }
    
    return (
        <div>
            <h1 className='text-center p-24 text-4xl font-bold text-slate-600 bg-yellow-50'>Job Details</h1>
          <div className='md:mx-40  md:my-20 my-5'>
          <div className='grid md:grid-cols-2 md:gap-32 gap-5 '>
            <div className='md:mx-0 mx-10'>
                <p><span className='text-xl font-bold text-slate-600'>Job Description:</span></p>
                <p className='mb-5 text-slate-500 mt-2 font-bold'>{data.JobDescription}</p>
                <p><span className='text-xl font-bold text-slate-600'>Job Responsibility:</span></p>
                <p className='mb-5 text-slate-500 mt-2 font-bold'>{data.JobResponsibility}</p>
                <p><span className='text-xl font-bold text-slate-600'>Educational Requirements:</span></p>
                <p className='mb-5 text-slate-500 mt-2 font-bold'>{data.EducationalRequirements}</p>
                <p><span className='text-xl font-bold text-slate-600'>Experiences:</span></p>
                <p className='mb-5 text-slate-500 mt-2 font-bold'>{data.Experiences}</p>
            </div>
            <div className='bg-yellow-50'>
                <div className='mb-10 ml-14 mt-14'>
                    <h1 className='text-xl font-bold text-slate-800 mb-5 border-b-2 border-slate-300 mr-24'>Job Details</h1>
                     <div className='flex mb-2'>
                     <img src={data.salaryIcon} alt="" />
                     <p className='font-bold text-slate-600 ml-2'> salary: <span className='ml-1 text-slate-500'>{data.salary}</span></p>
                     </div>
                      <div className='flex'>
                        <img src={data.salaryIcon} alt="" />
                        <p className=' font-bold text-slate-600 ml-2'>Job Title: <span className='ml-1 text-slate-500'>{data.jobCategory}</span></p>
                      </div>
                </div>
                <div className='ml-14 mt-10'>
                    <h1 className='text-xl font-bold text-slate-800 mb-5 border-b-2 border-slate-300 mr-24'>Contact Information</h1>
                    <div className='flex'>
                     <img src={data.phoneIcon} alt="" />
                    <p className=' font-bold text-slate-600 ml-2'>Phone: <span className='ml-1 text-slate-500'>{data.phone}</span></p>
                    </div>
                    <div className='flex my-2'>
                     <img src={data.emailIcon} alt="" />
                    <p className=' font-bold text-slate-600 ml-2'>Email: <span className='ml-1 text-slate-500'>{data.email}</span></p>
                    </div>
                    <div className='flex'>
                    <img src={data.locationIcon} alt="" />
                    <p className=' font-bold text-slate-600 ml-2'>Address: <span className='ml-1 text-slate-500'>{data.location}</span></p>
                    </div>
                    
                </div>
                <div className='text-center mt-14'>
                <Link to='/AppliedJobs' state={{ data: a}}> <button  onClick={()=>hendle()} className='bg-yellow-400 border-2 border-slate-600 px-40 py-3 rounded-md font-bold text-slate-600 text-2xl'>Apply Now</button></Link>
                    

                </div>
                
            </div>
          </div>
          </div>
        </div>
    );
};

export default JobDetails;