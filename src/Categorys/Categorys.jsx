import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';
import Data from '../Data';

const Categorys = () => {
    return (
        <div>
           <div className='text-center md:mt-20 mt-5'> 
           <h1 className='md:text-5xl text-4xl mb-5 font-bold text-yellow-400'>Job Category List</h1>
           <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
           </div>
           <div className='grid md:grid-cols-4 md:gap-14 gap-5 md:mx-20 mx-10 md:my-20 my-5'>
           {
            Data.map(category => <Category key={category.id} category = {category}></Category>)
           }
           </div>
           
        </div>
    );
};

export default Categorys;