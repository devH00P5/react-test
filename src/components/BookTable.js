import React from 'react'
import logo from '../imgs/logo.png'


function BookTable(props) {
  return (
    <div>
        <div className='one-pg-head'>

        </div>
        <div className='pg-wrapper '> 
            
                <form className='form-reservation'>
                <div className='booking-header'>
                <div className='logo'>
                    <img src={logo} alt='logo' />
                </div>
                <di>
                    <h3>TABLE RESERVATION</h3>
                </di>

            </div>
                    <p>please Fill out the reservation details</p>
                    <div className='form-g2'>
                        <div>
                            <label htmlFor=''>Date</label>
                            <input id='reservationDate' type='date'/>
                        </div>
                        <div >
                            <label htmlFor=''>Time</label>
                            <input id='reservationTime' type='time'/>
                        </div>
                        </div>
                        <div className='form-g'>
                            <label htmlFor=''>Number of Guest</label>
                            <input id='guestNumber' type='number' min={1} max={20}/>
                        </div>
                        <p>Please Fill out your contact details</p>
                        <div className='form-g'>
                            <label htmlFor=''>Name</label>
                            <input id='name' type='text'/>
                        </div>
                        <div className='form-g'>
                            <label htmlFor=''>E-mail</label>
                            <input id='contactEmail' type='email'/>
                        </div>
                        <div className='form-g'>
                            <label htmlFor=''>Phone</label>
                            <input id='contactNember' type='number'/>
                        </div>
                        <div className='form-g'>
                            <label htmlFor=''>Special Request</label>
                            <textarea name='' rows={10}>

                            </textarea>
                        </div>
                        <div className='submit-g'>
                           <button type='submit'>Place reservation</button>
                            
                        </div>

                    
                </form>


           

            

        </div>
      
    </div>
  )
}



export default BookTable


