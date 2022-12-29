import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/Authprovider/Authprovider';

const Cheackout = () => {
    const {title,_id,img,price}=useLoaderData();
    const{user}=useContext(AuthContext);
    const handlePlaceorder=(e)=>{
        e.preventDefault();
        const form=e.target;
        const name=`${form.firstname.value} ${form.lastname.value} `;
        const phone=form.phone.value;
        const email=user?.email || 'unregistrad';
        const address = form.address.value;//postcode
        const postcode = form.postcode.value;//'currency
        const currency = form.currency.value;//'currency
        const order={
            service:_id,
            serviceName:title,
            price,
            customer:name,
            phone,
            email,
            address,
            postcode,
            currency
        }
        // if(phone.length>10){
        //     alert("should be 11")
        // }
        fetch('https://gniuscar-node-mongo-curd-server-didarul381.vercel.app/orders',{
            method:'POST',
            headers:{
                     'content-type':'application/json'
            },
            body:JSON.stringify(order)
        })
        .then(res=>res.json())
   .then(data=>{
    // console.log(data)
    // if(data.acknowledged){
    //     alert("success")
    //     form.reset()
    //    }
    window.location.replace(data.url);
    }
   
    )
    .catch(err=>console.error(err))
    }
    return (
        <div >
          <form onSubmit={handlePlaceorder} className="flex items-center justify-between mx-4 ">
          <div className='m-4'>
          <img className='w-72' src={img }alt="Avatar Tailwind CSS Component"  />
          <h2>You are about to order :{title}</h2>
          <h2>Price:{price}</h2>
          </div>
         
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 my-4'>
          <input name='firstname' type="text" placeholder="first name" className="input input-ghost w-full " />
          <input  name='lastname' type="text" placeholder="last name" className="input input-ghost w-full " />
          <input  name='phone'type="text" placeholder="your phone" className="input input-ghost w-full " required />
          <input   name='email'type="text"defaultValue={user?.email} readOnly  placeholder="your email" className="input input-ghost w-full " />
          <select defaultValue='BDT' name='currency' className="select select-bordered  max-w-xs">
         <option value='BDT'>BDT</option>
          <option value='USD'>USD</option>
         </select>
         <input  name='postcode'type="text" placeholder="your postcode" className="input input-ghost w-full " required />
         <textarea name="address" className="textarea textarea-bordered h-24 w-full" placeholder="Your Address" required></textarea>
         <input className='btn ' type='submit'value='pay'></input>
          </div>
         <div>
        
           
         </div>
           
          </form>
         
        </div>
    );
};

export default Cheackout;