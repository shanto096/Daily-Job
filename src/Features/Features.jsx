import React from 'react';
import Feature from '../Feature/Feature';
import { Link, useLoaderData } from 'react-router-dom';
import Data from '../Data';

const Features = () => {
    
    return (
        <div>
           <div className='text-center md:mt-5'> 
           <h1 className='md:text-5xl text-4xl mb-3 font-bold text-yellow-400'>Featured Jobs</h1>
           <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
           </div>
           <div className='grid md:grid-cols-2 gap-x-20 gap-y-7 md:mx-32 mx-5 mt-10'>
                {
                Data.map(feature => <Feature key={feature.id} feature = {feature}></Feature>)
                }
           </div>
           <div className='text-center my-4'>
           <Link><button className='bg-yellow-200 border-2 border-slate-600 p-2 rounded-md font-bold text-slate-600'>See All Jobs </button></Link>
           </div>
        </div>
    );
};

export default Features;