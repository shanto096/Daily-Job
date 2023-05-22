import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';
import { Bars3Icon,XMarkIcon } from '@heroicons/react/24/solid'
import Data from '../Data';

const Nav = () => {
  const [open, setOpen] = useState(false)
    return (

      <div className='md:bg-yellow-100 bg-yellow-100 '>
      <nav>
         <div onClick={() =>setOpen(!open)} className='md:hidden'>
          <span>{open === true? <XMarkIcon className="h-10 w-10  font-bold text-black"/> : <Bars3Icon className="h-10 w-10 text-black font-bold " />}</span>
         
         </div>
          <ul className={`md:flex absolute duration-500 md:static ${open ? 'mx-5 px-5 bg-yellow-400 rounded-lg grid grid-cols-5':'-left-72'}`}>
            <div className="md:flex md:items-center md:mx-60 py-4 ">
                      <div className=''>
                       <Link to="/"><h1 className='text-4xl font-bold md:text-yellow-500 text-slate-700'>Daily Job</h1></Link>
                      </div>
              
                    <div className=' md:ml-40'>
                      <ActiveLink to ='/'><span className='mr-5 font-bold text-xl '>Home</span></ActiveLink>
                      <ActiveLink to ='/Statistics'> <span className='mr-3 font-bold text-xl'>Statistics</span></ActiveLink>
                      <ActiveLink to ='/AppliedJobs'><Link to='/AppliedJobs' state={{ data: []}}><span className='mr-3 font-bold text-xl' >Applied Jobs</span></Link> </ActiveLink>
                      <ActiveLink to ='/Blog'> <span className='mr-3 font-bold text-xl'>Blog</span></ActiveLink>
                    </div>
                    <div className=''>
                      <Link to='/Start'> <button className='bg-yellow-400 py-3 px-5 border-2 border-gray-600 rounded-md font-bold text-xl text-white ml-32'>Star Applying</button></Link>
                    </div>
             </div>
              
          </ul>
      </nav>
  </div>

      // <nav className='flex md:justify-center bg-yellow-100 w-full '>
      //   <div className='grid md:grid-cols-3 py-5 md:ml-36 items-center'>
      //     <div>
      //       <Link to="/"><h1 className='text-3xl font-bold text-yellow-500'>Daily Job</h1></Link>
      //     </div>
      //     <div>
      //       <ActiveLink to ='/'><span className='mr-5 font-bold text-xl '>Home</span></ActiveLink>
      //       <ActiveLink to ='/Statistics'> <span className='mr-3 font-bold text-xl'>Statistics</span></ActiveLink>
      //       <ActiveLink to ='/AppliedJobs'><Link to='/AppliedJobs' state={{ data: []}}><span className='mr-3 font-bold text-xl' >Applied Jobs</span></Link> </ActiveLink>
      //       <ActiveLink to ='/Blog'> <span className='mr-3 font-bold text-xl'>Blog</span></ActiveLink>
      //       <ActiveLink to ='/chat'> <span className='mr-3 font-bold text-xl'>Chat</span></ActiveLink>
      //     </div>
      //       <div>
      //       <button className='bg-yellow-400 py-3 px-5 rounded-md font-bold text-xl text-white ml-20'>Star Applying</button>
      //       </div>
      //   </div>
      // </nav> 
    );
};

export default Nav;