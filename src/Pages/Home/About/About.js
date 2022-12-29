import React from 'react';
import person  from '../../../assets/images/about_us/person.jpg';
import patrs  from '../../../assets/images/about_us//parts.jpg';

const About = () => {
    return (
        <div className="hero my-20">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className='w-1/2  relative'>
          <img src={person}  alt='' className=" max-w-sm  w-4/5 h-full rounded-lg shadow-2xl" />
          <img src={patrs}  alt='' className="  max-w-sm w-3/5 right-5 top-1/2 absolute rounded-lg shadow-2xl" />
          </div>
          <div className='w-1/2'>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default About;