import React from 'react'
import logo from '../imgs/logo.png'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'



function BookTable(props) {

  return (
    <div>
        <div className='one-pg-head'>

        </div>
        <div className='pg-wrapper '> 

            <Formik initialValues={{
                reservationDate:'',
                reservationTime:'',
                guestNumber:1,
                name:'',
                email:'',
                phone:'',
                specialRequest:''

            }} 
         validationSchema={
                Yup.object({
                reservationDate:Yup.date("Please Choose a valid Date for reservation").required('This field is required'),
                //reservationTime:Yup.time("please choose a valid time for reservation").required("Please choose a time for reservation"),
                guestNumber:Yup.number("Please Enter a Number").required("Please Enter Number of Guest"),
                name:Yup.string("Please Enter A Valid Name").required("Name field can't be empty"),
                email:Yup.string().email("Please Enter a valid Email").required("Please E-mail field can't be empty"),
                 phone:Yup.number("Please Enter a valid Phone number").required("The Phone field can't be Empty"),
                specialRequest:Yup.string("")
            })}  
            
            
        onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}>
        <Form className='form-reservation'>
        <div className='booking-header'>
                <div className='logo'>
                    <img src={logo} alt='logo' />
                </div>
                <div>
                    <h3>AFRO WEEKEND TABLE RESERVATION</h3>
                </div>
            </div>
            <p>please Fill out the reservation details</p>
            <div className='form-g2'>
                        <div>
                            <label htmlFor='reservationDate'>Date</label>
                            <Field name='reservationDate' type='date' />
                            <ErrorMessage name='reservationDate' />
                        </div>
                        <div >
                            <label htmlFor='reservationTime'>Time</label>
                            <Field name='reservationTime' type='Time' />
                            <ErrorMessage name='reservationTime' />
                        </div>
                        </div>
                        <div className='form-g'>
                            <label htmlFor='guestNumber'>Number of Guest</label>
                            <Field name='guestNumber' type='number' />
                            <ErrorMessage name='guestNumber' />
                            
                        </div>
                        <p>Please Fill out your contact details</p>
                        <div className='form-g'>
                            <label htmlFor='name'>Name</label>
                            <Field name='name' type='text' />
                            <ErrorMessage name='name' />
                            
                        </div>
                        <div className='form-g'>
                            <label htmlFor='email'>E-mail</label>
                            <Field name='email' type='email' />
                            <ErrorMessage name='email' />
                        </div>
                        <div className='form-g'>
                            <label htmlFor='phone'>Phone</label>
                            <Field name='phone' type='number' />
                            <ErrorMessage name='phone' />
                            
                        </div>
                        <div className='form-g'>
                            <label htmlFor='specialRequest'>Special Request</label>
                            <Field name='specialRequest' as="textarea" rows={5}  />
                            <ErrorMessage name='specialRequest' />

                        </div>
            
            

         <div className='submit-g'>
            <button type='submit'>Place reservation</button>
        </div>
        </Form>


            </Formik>
            
            


           

            

        </div>
      
    </div>
  )
}



export default BookTable


