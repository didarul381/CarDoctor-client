import Main from "../../Layout/Main";
import Cheackout from "../../Pages/Cheackout/Cheackout";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Orders from "../../Pages/orders/Orders";
import PaymentFail from "../../Pages/PaymentFail";
import PaymentSuccess from "../../Pages/PaymentSuccess/PaymentSuccess";
import Singup from "../../Pages/Singup/Singup";
import PrivateRoute from "../../private/PrivateRoute";
//import Header from "../../Pages/Shared/Header";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([

{path:'/',element:<Main></Main>,children:[

   {path:'/',element:<Home></Home>},
   {path:'/login',element:<Login></Login>},
   {path:'/singup',element:<Singup></Singup>},
   {path:'/checkout/:id',element:<PrivateRoute><Cheackout></Cheackout></PrivateRoute>,
       loader:({params})=>{
         return fetch(`https://gniuscar-node-mongo-curd-server-didarul381.vercel.app/services/${params.id}`)
       }
 },
 {path:'/orders',element:<PrivateRoute><Orders></Orders></PrivateRoute>},
 {
  path:'payment/success',
  element:<PaymentSuccess></PaymentSuccess>
},
{
  path:'/payment/fail',
  element:<PaymentFail></PaymentFail>
}


]}

]);

export default  router;