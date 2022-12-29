import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const PaymentSuccess = () => {
    const location=useLocation();
    const query=new URLSearchParams(location.search)

   const transectionId= query.get("transectionId");
   //console.log(transectionId);
   const[order,setOrder]=useState({});
   useEffect(()=>{
   fetch(`https://genius-car-4b4da.web.app/orders/:by-transection-id/${transectionId}`)
   .then(res=>res.json())
   .then(data=>{
    console.log(data);
    setOrder(data)
   })

   },[transectionId]);
if(!order._id){
    return(
    <div>
        No Oredr Found..
    </div>
    )
}

    return (
        <div>
            <h1>Congrates...Successfully paid...</h1>
           <h2>Your payment Summary....</h2>
           <div className="overflow-x-auto">
    <table className="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>price</th>
        <th>Transation id</th>
        <th>Shpping Address</th>
      </tr>
    </thead>
    <tbody>
    
      <tr>
        <th>1</th>
        <td>{order.serviceName}</td>
        <td>{order.price}</td>
        <td>{order.transectionId}</td>
        <td>{order.address}</td>
      </tr>
      
     
    </tbody>
  </table>
  <button className='btn btn-primary ml-auto mt-5 block print:hidden' onClick={()=>window.print()}>print </button>
</div>
 </div>
    );
};

export default PaymentSuccess;