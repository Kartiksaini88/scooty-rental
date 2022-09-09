import logo from './logo.svg';
import './App.css';
import { Register } from './components/registerpage/register';
import { Login } from './components/loginpage/login';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/navbar/navbar';
import { Home } from './components/homepage/homepage';
import { useEffect, useState } from 'react';
import axios from 'axios';
import RequireAuth from './components/hoc/protectedroute';
import { Vehical } from './components/vehical/vehical';
import { MyBooking } from './components/mybooking/mybooking';



function App() {

  const [data , setdata] = useState([])
  const [vehical , setvehical] = useState([])
  const [onein , setonein] = useState([])
  const [allformdata , setallformdata] = useState([])
  const [loading , setloading] = useState(false)
  const [error , seterror] = useState(false)
  


 useEffect(()=>{
     getData()
 },[])

 const getData = ()=>{
  setloading(true)
     axios('https://todo-soul.herokuapp.com/rental/')
     .then((res)=>{
         const {Outlets} = res.data.Data
         const {Outlet1data} = res.data.Data.Outlets[0]
         setvehical(Outlet1data)
         setdata(Outlets)
         setloading(false)
         seterror(false)
     }).catch((err)=>{
         seterror(true)
     })
 }  
  return (
    <>
     <Navbar></Navbar>
    <div className="App">
      <Routes>
      <Route path='' element={<Home loading={loading} error = {error} data={data}></Home>}></Route>
      <Route path='/login' element={ <Login></Login> }></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/vehical' element={<RequireAuth><Vehical allformdata={allformdata} setallformdata={setallformdata} onein={onein} setonein={setonein} vehical={vehical} ></Vehical></RequireAuth>}></Route>
      <Route path='/bookings' element={<RequireAuth><MyBooking onein={onein}allformdata={allformdata} setallformdata={setallformdata} setonein={setonein}></MyBooking></RequireAuth>}></Route>
     </Routes>
    </div>
  
    </>
  );
    
}

export default App;

