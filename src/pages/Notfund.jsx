import React from 'react';
import image from '../../src/assets/404.png'

const Notfund = () => {
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='max-w-xl p-5'>
                 <img src={image} className=' w-full' alt="" />
                
            </div>
            

            
        </div>
    );
};

export default Notfund;