

import { nanoid } from "nanoid"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Col, Modal, ModalBody, ModalHeader, Row } from "reactstrap"
import './vehical.css'


export const Vehical = ({vehical ,onein,allformdata,setallformdata,setonein})=>{
 const [modal , setmodal] = useState(false)
 const [onedata , setonedata] = useState([])
 const [formdata , setformdata] = useState({})
 const [isfilled , setisfilled] = useState(false)

  const nav = useNavigate()
 console.log(onein)


 const getvalues = (e)=>{
   
    const {name , value} = e.target
   
    setformdata({
        ...formdata,
        [name]:value
    })
 }

 

 const getonedata = (e)=>{
  
        setonedata(e)
        setmodal(true)  
 }

 const setdata=()=>{
    setonein([
        ...onein,
        onedata
    ])
    setmodal(false)

    localStorage.setItem("onevehicalData",JSON.stringify(onein))
 }
 
 const onsubmit = (e)=>{
   e.preventDefault()

   setallformdata([
    ...allformdata,
    formdata
   ])

localStorage.setItem("form",JSON.stringify(allformdata))
alert("Booked")
nav('/bookings')


 }


 



    return(
        <>
        <Modal
        size="lg"
        isOpen={modal}
        toggle={()=>setmodal(!modal)}
        >
            <ModalHeader 
            toggle={()=>setmodal(!modal)}
            >
            </ModalHeader>
            <ModalBody>
                <form action="" onSubmit={onsubmit}>
                    <Row>
                        <Col lg={12}>
                            <div>
                                <label htmlFor="Name">Name</label>
                                <input onChange={getvalues} required={true} className="form-control" name="Name" type="text" placeholder="Enter Name"   id="" />
                                <label htmlFor="Name">Email</label>
                                <input onChange={getvalues} required={true} className="form-control" name="Email" type="email" placeholder="Enter Email"   id="" />
                                <label htmlFor="Name">Phone Number</label>
                                <input onChange={getvalues} required={true} className="form-control" name="Number" type="number" placeholder="Enter Phone Number"   id="" />
                                <label htmlFor="Name">Date</label>
                                <input onChange={getvalues} required={true} className="form-control" name="Date" type="date" placeholder="Enter Date"   id="" />
                                <label htmlFor="Name">From</label>
                                <input onChange={getvalues} required={true} className="form-control" name="from" type="time" placeholder="Enter Time"   id="" />
                                <label htmlFor="Name">To</label>
                                <input onChange={getvalues} required={true} className="form-control" name="to" type="time" placeholder="Enter Time"   id="" />
                                <input type="submit" onClick={setdata} className="form-control" />
                            </div>
                        </Col>
                    </Row>
                </form>
            </ModalBody>
        </Modal>


        <div className="vehical-div">
            {vehical.map((e,i)=>(
            <div  className="every-v-div" key={nanoid()}>
             <div className="img-div">
                <img className="v_img" src={e.img} alt="" />
             </div>
             <div className="inodiv">
                <h3 className="name">{e.v_name}</h3>
                <p className="cost">₹{e.cost}/hr</p>
                <p className="quality">Good Quality</p>
                <button onClick={()=>getonedata(e)} className="check-btn">BOOK NOW</button>
             </div>
            </div>
            ))}
        </div>

        </>
    )
}
