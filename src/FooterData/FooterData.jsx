import React from 'react';

const FooterData = ({footer}) => {
    const {name,A,B,C,D} = footer;
    return (
        <div className='md:ml-20'>
            <h1 className='md:mb-10 mb-3 font-bold text-xl'>{name}</h1>
            <p>{A}</p>
            <p className='md:my-5 my-2'>{B}</p>
            <p>{C}</p>
            <p className='md:my-5 my-2'>{D}</p>
        </div>
    );
};

export default FooterData;