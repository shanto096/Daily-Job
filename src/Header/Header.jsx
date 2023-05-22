import React from 'react';
import img from './../../public/img/277244822_1566644177055102_5896749782895716447_n-removebg-preview.png';
// import img from './../../public/img/Icons/WhatsApp_Image_2022-12-09_at_3.35.59_PM-removebg-preview.png'

const Header = () => {
    return (
        <div className='flex justify-center'>
          <div className='grid md:grid-cols-2 md:ml-60 ml-5  gap-x-20 mt-5'>
            <div className='md:mt-28'>
            <h1 className='text-5xl font-bold text-slate-700'>One Step <br /> Closer To Your <br /><span className='text-yellow-400'>Dream Job</span> </h1>
            <p className='my-7 text-xl text-slate-700'>Explore thousands of job opportunities with all the <br /> information you need. Its your <br /> future. Come find it. Manage all your job application from start to finish.</p>
            <button className='bg-yellow-400 p-3 rounded-md font-bold text-xl border-2 border-gray-600 text-white'>Get Started</button>
           </div>
           <div>
             {/* <img className='w-9/12 mt-8' src={img} alt="shanto img" /> */}
             <img className='w-8/12' src={img} alt="bidhan img" />
           </div>
          </div>
        </div>
    );
};

export default Header;