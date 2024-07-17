import { Input } from '@mui/icons-material';
import dayjs from 'dayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Box, FormControl, FormControlLabel, FormLabel, Modal, Radio, RadioGroup, Typography } from '@mui/material';
import React ,{useContext, useEffect, useState} from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import CartMenuItem from '../CartMenuItem';
import { OrdersListContext } from '../../Contexts/OrdersContext';
import { loadStripe } from '@stripe/stripe-js';
const OrdersList = (props) => {

    //Stripe integration Code
   /* const onPayment =async ()=>{
        const stripeLoad=await loadStripe("pk_test_51PZhtDDhz0qJSGymhbYfOqWzrfrinzcwz8dvYdkyhO8xp5UU5tZA8JzFGUhArkhhDgYOt5cpcuSikoyqEJrIhHjd0000mIOYaD");
        const body={
            products:{
                name:'Hoopx'
            }
        }
        const headers={
              "Content-Type": "application/json"
        }

        const response=await fetch(`http://localhost:5252/create-checkout-session`,
            {
                method:'POST', 
                body:JSON.stringify({name:'h00px'}),
                headers:headers
               
            }
        )

        const session=await response.json()
        const result= stripeLoad.redirectToCheckout ({
            sessionId:session.id
        })

    }*/
    
        const onPayment =async (menu,customer_details,mode)=>{
        const stripeLoad=await loadStripe("pk_test_51PZhtDDhz0qJSGymhbYfOqWzrfrinzcwz8dvYdkyhO8xp5UU5tZA8JzFGUhArkhhDgYOt5cpcuSikoyqEJrIhHjd0000mIOYaD");
        const body={
            orderItems:menu,
            order:customer_details,
            pickup_status:mode
        }
        const headers={
              "Content-Type": "application/json"
        }

        const response=await fetch(`http://localhost:5252/create-checkout-session`,
            {
                method:'POST', 
                headers:headers,
                body:JSON.stringify(body)
               
            }
        )

        const session=await response.json()
        const result= stripeLoad.redirectToCheckout ({
            sessionId:session.id
        })

    }

    //End stripe Integration Code




const {orders,updateTotal,lineTotal,removeOrderItem,newLineTotal,orderQuantity,ordersTotal}=useContext(OrdersListContext);


const [temp, settemp] = useState(true);
const [modalDisplay, setmodalDisplay] = useState(false);
   
 //Delivery Mode
 const [selectedDelivery, setselectedDelivery] = useState('pickup')
 
 const handleDeliveryChanged=(e)=>{
    setselectedDelivery(e.target.value)
    console.log(selectedDelivery)
    
 }
    const showModal=()=>{
        setmodalDisplay(true);
    }

    const hideModal=()=>{
        setmodalDisplay(false);
    }
    
    const newOrderTotal=()=>{
        console.log('updating...orderTotal')

    }

 

    //pickup templates
    const delivery=()=> {
        return(
    <>
    <div>
    <button type='submit' className='pay'>Pay (£): {Number(ordersTotal).toFixed(2)} </button>
            
    </div>
    </>
)
}  
    const pickUp=()=>{
        return(
            <>
             <button type='submit' className='pay'>Pay (£): {Number(ordersTotal).toFixed(2)} </button>

{/*<p className='note'>Please note that a payment of 25% would have to be made for your order to be processed</p>

<button type='submit' className='pay'>Pay {Number(props.pickupPercent).toFixed(2)}</button>*/}
            </>
        )
    }
    const inHouse=()=>{
        return(
            <>
            <p>Lole</p>
            </>
        )
    }
    //End pickup templates

    //Handle template to show based on delivery Mode
    const renderDeliveryMode=()=>{
        if(selectedDelivery=='delivery'){
            delivery()

        }
        else if(selectedDelivery=='pickUp'){
            pickUp()

        }
        else{
            inHouse()

        }
    }
  

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          
        <div className='order_button'>
            <button  onClick={()=>{showModal()}}>
            <svg  version="1.1" id="Capa_1" 
	 viewBox="0 0 60 60" >
<g>
	<path d="M38.914,0H6.5v60h47V14.586L38.914,0z M39.5,3.414L50.086,14H39.5V3.414z M8.5,58V2h29v14h14v42H8.5z"/>
	<path d="M42.5,21h-16c-0.552,0-1,0.447-1,1s0.448,1,1,1h16c0.552,0,1-0.447,1-1S43.052,21,42.5,21z"/>
	<path d="M22.875,18.219l-4.301,3.441l-1.367-1.367c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l2,2
		C17.987,23.901,18.243,24,18.5,24c0.22,0,0.441-0.072,0.624-0.219l5-4c0.432-0.346,0.501-0.975,0.156-1.406
		C23.936,17.943,23.306,17.874,22.875,18.219z"/>
	<path d="M42.5,32h-16c-0.552,0-1,0.447-1,1s0.448,1,1,1h16c0.552,0,1-0.447,1-1S43.052,32,42.5,32z"/>
	<path d="M22.875,29.219l-4.301,3.441l-1.367-1.367c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l2,2
		C17.987,34.901,18.243,35,18.5,35c0.22,0,0.441-0.072,0.624-0.219l5-4c0.432-0.346,0.501-0.975,0.156-1.406
		C23.936,28.943,23.306,28.874,22.875,29.219z"/>
	<path d="M42.5,43h-16c-0.552,0-1,0.447-1,1s0.448,1,1,1h16c0.552,0,1-0.447,1-1S43.052,43,42.5,43z"/>
	<path d="M22.875,40.219l-4.301,3.441l-1.367-1.367c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l2,2
		C17.987,45.901,18.243,46,18.5,46c0.22,0,0.441-0.072,0.624-0.219l5-4c0.432-0.346,0.501-0.975,0.156-1.406
		C23.936,39.943,23.306,39.874,22.875,40.219z"/>
</g>
</svg>

            </button>
            <p>{orders.selectedMenus.length}</p>
            <div className='orders'>

<Modal
style={{overflow:'scroll'}}
  open={modalDisplay}
  onClose={hideModal}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={

 {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }

  }>
    <Typography id="modal-modal-title" variant="h6" component="h5">
      Your orders  
    </Typography>
    <hr />
  
    <div className='orders_container'>
    {
            orders.selectedMenus.map((orderItem, index) => {
               return(
              
                <CartMenuItem key={index} cartItem={orderItem}  index={index} removeOrderItem={props.removeOrderItem} />
             
                

               )
            })
        }
    </div>  
    <div>
       
         
       <div>
               <FormControl>
              <FormLabel>Delivery Options</FormLabel>
              <RadioGroup
              row 
              value={selectedDelivery}
              onChange={handleDeliveryChanged}
              >
                  
                  <FormControlLabel  value="pickup" control={<Radio />} label="Pick Up"/>
                  <FormControlLabel value="delivery" control={<Radio />} label="Delivery" id='fu'/>
              </RadioGroup>
          </FormControl>


       </div>
       <div className='deliveryOptions'>

       <div>
    <Formik initialValues={{
                postCode:'',
                clientAddress:'',
                clientName:'',
                phone:'',
                email:''
                

            }} 
         validationSchema={
                Yup.object({
                //reservationTime:Yup.time("please choose a valid time for reservation").required("Please choose a time for reservation"),
                postCode:Yup.string("Please Enter Postcode").required("Postcode is required"),
                clientName:Yup.string("Please Enter A Valid Name").required("Name is required"),
                clientAddress:Yup.string().required("Address is required"),
                 phone:Yup.number("Please Enter a valid Phone number").required("Phone Number is required"),
                 email: Yup.string().email('Invalid email format').required('Email is required'),
            })}  
            
            
        onSubmit={(values) => {
            onPayment(orders.selectedMenus,values,selectedDelivery)

            //console.log(values,orders)
            
        
       }}>
        <Form >
                        <div className='form-g'>
                        <label htmlFor='clientName'>Name:</label>
                            <Field name='clientName'   />
                            <p className='err'><ErrorMessage name='clientName' /></p>

                        </div>
                        <div className='form-g'>
                        <label htmlFor='email'>Email:</label>
                            <Field name='email'   />
                            <p className='err'> <ErrorMessage name='email' /></p>

                        </div>
                        <div className='form-g'>
                            <label htmlFor='phone'>Phone</label>
                            <Field name='phone' type='number' />
                            <p className='err'><ErrorMessage name='phone' /></p>
                            
                        </div>
         
                        <div className='form-g'>
                        <label htmlFor='postCode'>Post Code:</label>
                            <Field name='postCode'   />
                            <p className='err'><ErrorMessage name='postCode' /></p>

                        </div>
                        <div className='form-g'>
                        <label htmlFor='clientAddress'>Address:</label>
                            <Field name='clientAddress'   />
                            <p className='err'><ErrorMessage name='clientAddress' /></p>

                        </div>
                        <div className='total_order'>
        <p>Total (£): <span>{Number(ordersTotal).toFixed(2)}</span></p>
        </div>
            
            

                        {
          selectedDelivery=="pickup"?pickUp():delivery()
          }
        </Form>


            </Formik>
    </div>
        

       </div>
       
     
       

  </div>
    
  </Box>

  
</Modal>
     
            </div>
        </div>
         </LocalizationProvider>
    );
}

export default OrdersList;
