import React from 'react';
import { useLocation } from 'react-router-dom';
import Apply from '../Apply/Apply';

const Applyed = () => {
    const location = useLocation()
    const { data } = location.state


    return (
        <div>
            <h1 className='text-center p-24 text-4xl font-bold text-slate-600 bg-yellow-50'>Applied Jobs</h1>
            <div className='mt-10'>
                {
                  data.map(apply => <Apply key = {data.id} apply ={apply}></Apply>)  
                }
            </div>
        </div>
    );
};

export default Applyed;