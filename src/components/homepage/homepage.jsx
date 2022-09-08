import axios from "axios"
import { nanoid } from "nanoid"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import './home.css'

export const Home = ({data})=>{

  
    return(
        <div className="home-div">
            <div className="heading"><h2>Vehical Rental</h2></div>
            <div className="rental-div">
                {data.map((e,i)=>(
                    <div key={nanoid()} className="every-rental-div">
                        <div className="img-div"><img className="rental-img" src={e.img} alt="" /></div>
                        <div className="info-div">
                            <h3 className="name">{e.name}</h3>
                            <p className="location">{e.location} {e.city} {e.pincode}</p>
                            <p className="Info">{e.info}</p>
                            <button className="check-btn"><Link className="btn-link" to='/vehical'>Check This Outlet</Link></button>
                            
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}