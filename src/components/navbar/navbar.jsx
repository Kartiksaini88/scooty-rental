import { useContext } from 'react'
import './navbar.css'
import { AuthContext } from '../context/AuthContext'
import { Link } from 'react-router-dom'
export const Navbar = ()=>{
  const {isauth , authout} = useContext(AuthContext)
 
    return(
        <div className='nav-div'>
            <div className='logo-div'>
            <Link className='Link'  to='/'>Logo</Link>
            </div>
            <div className='link-div'>
                <div><Link className='Link'  to='/'>Home</Link> </div>
                <div><Link className='Link'  to='/bookings'>My Bookings</Link></div>
                <div onClick={()=>{
                    authout()
                }}><Link className='Link'  to='/login'>{isauth?"Logout":"Login"}</Link></div>
            </div>
           
        </div>
    )
}