import React from 'react';

const Category = ({category}) => {
    const {CategoryImg, CategoryName, jobs} = category;
    return (
        <div className=' bg-yellow-50 rounded-md  p-5'>
           <img className='bg-yellow-100 p-3 w-14 rounded-md' src={CategoryImg} alt="" />
           <h1 className='text-xl font-bold my-3 text-slate-700'>{CategoryName}</h1>
           <p>{jobs}</p>
        </div>
    );
};

export default Category;