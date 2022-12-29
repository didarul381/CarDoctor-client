import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import Authprovider, { AuthContext } from '../../Context/Authprovider/Authprovider';




const Singup = () => {
  const { createUser}=useContext(AuthContext);
  const location=useLocation();
  const navigate=useNavigate();
  const from=location.state?.from?.pathname || '/'
    const handleLogin=(e)=>{
        e.preventDefault();
        const form=e.target;
        const email=form.email.value;
       // const name=form.name.value;
        const password=form.password.value;
        createUser(email,password)
        .then(result=>{
          const user=result.user;
          console.log(user);
          navigate(from,{replace:true})
         
        }).catch(error=>{
          console.error(error);
        })

    }
    return (
        <div className="hero ">
        <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <img  src={img} alt=''></img>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <h1 className='text-center font-bold'>Login Now..</h1>
            <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="Enetr your name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" name='password' placeholder="password" className="input input-bordered" />
                
              </div>
              <div className="form-control mt-6">
              <input className="btn btn-primary" type='submit' value='sing up'/>
                
              </div>
            </form>
            <p className='text-center'>Already Have an Account<Link className='text-orange-700 font-bold  my-20' to='/login'>Login</Link></p>
          </div>
        </div>
      </div>
    );
};

export default Singup;