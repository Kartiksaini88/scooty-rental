import { nanoid } from 'nanoid'
import './mybooking.css'

export const MyBooking = ({onein,allformdata,setallformdata,setonein}) => {

     console.log(onein)
     console.log(allformdata)
    

    return (
        <div className="booking-card">
            <h2>My Bookings</h2>
            {onein.map((e, i) => (
                <div key={nanoid()} className='every_map_div'>
                    <div className='img_div'><img src={e.img} className="booking_img" alt="" /></div>
                    <div className='info_div'>
                        <h2 className='bold_h2'>{e.v_name}</h2>
                        {allformdata.map((e, i) => (
                            <div key={nanoid()} className='every_form_div'>
                                <p className='grey_p'><span className='black_p'>Booked by -</span> 👤 {e.Name}</p>
                                <p className='grey_p'><span className='black_p'>Email -</span> ✉️ {e.Email}</p>
                                <p className='grey_p'><span className='black_p'>Vehical No* -</span> {nanoid(5)}</p>
                                <p className='grey_p'><span className='black_p'>Contact Number -</span> ☎️ {e.Number}</p>
                                <p className='grey_p'><span className='black_p'>From -</span> ⏰ {e.from} <span className='black_p'>~ To -</span> ⏰ {e.to} </p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}



        </div>
    )
}