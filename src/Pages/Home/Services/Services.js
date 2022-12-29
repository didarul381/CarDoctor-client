import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const[services,setServices]=useState([]);
    useEffect(()=>{
   fetch('https://gniuscar-node-mongo-curd-server-didarul381.vercel.app/services')
   .then(res=>res.json())
   .then(data=>setServices(data))


    },[])
    return (
        <div>
           <div className='text-center'>
              <h4 className='text-2xl font-bold text-orange-600'>Services..</h4>
              <h2 className='text-2xl font-bold text-orange-600'>Our Services..</h2>
              <p className='text-2xl font-bold text-orange-300'>Services..</p>
            </div> 
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto text-center'>
               
                {
                    services.map(service=><ServiceCard key={service._id} service={service} ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;