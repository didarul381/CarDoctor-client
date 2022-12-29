import React, { useEffect, useState } from 'react';

const OrderRow = ({order, handleDelete,handleStatusUpdate}) => {
    const[orderService,setOrderService]=useState([])
    const{ _id,serviceName,customer,price,service, status,paid,transectionId }=order;

    useEffect(()=>{

       fetch(`https://gniuscar-node-mongo-curd-server-didarul381.vercel.app/services/${service}`)
       .then(res => res.json())
       .then(data => setOrderService(data))

    },[service]);

  
    return (
        <tr>
       <th>
                <label>
                <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button>
                </label>
            </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="rounded w-24 h-24">


              {
                 orderService?.img &&
                  <img src={orderService.img }alt="Avatar Tailwind CSS Component" />
              }
              </div>
            </div>
            <div>
                <div className="font-bold">{customer}</div>
              <div className="text-sm opacity-50">{serviceName}</div>
            </div>
          </div>
        </td>
        <td>
          <span className="badge badge-ghost text-bold">{price}</span>
        </td>
        <td>{transectionId}</td>
        <th>
          <button onClick={()=>handleStatusUpdate(_id)} className="btn btn-ghost btn-xs">{status?status:"pandihg"}</button>
        </th>
      </tr>
    );
};

export default OrderRow;