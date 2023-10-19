
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/layout/Layout.jsx';
import Home from './Components/Home/Home.jsx';
import Login from './Components/Auth/Login/Login.jsx';
import Registar from './Components/Auth/Registar/Registar.jsx';
import Forget from './Components/Auth/Forget/Forget.jsx';
import SendCod2 from './Components/Auth/SendCod2/SendCod2.jsx';
import UpdatePassword3 from './Components/Auth/UpdatePassword3/UpdatePassword3.jsx';
function App() {
 const router=createBrowserRouter([
  {path:'/',element:<Layout/>,children:[
    {path:"home",element:<Home/>},
    {path:'/login',index:true,element:<Login/>},
    {path:"registar",element:<Registar/>},
    {path:"forget",element:<Forget/>},
    {path:"send",element:<SendCod2/>},
    {path:"Update",element:<UpdatePassword3/>},
  ]}
 ])
   return (

   <>
  

   <RouterProvider router={router}/>   
 
   </>
  );
}

export default App;
