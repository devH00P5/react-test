import { Input } from '@mui/icons-material';
import dayjs from 'dayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Box, FormControl, FormControlLabel, FormLabel, Modal, Radio, RadioGroup, Typography } from '@mui/material';
import React ,{useEffect, useState} from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
const OrdersList = (props) => {


const [temp, settemp] = useState(true);
const [modalDisplay, setmodalDisplay] = useState(false);
 //Delivery Mode
 const [selectedDelivery, setselectedDelivery] = useState('inHouse')
 
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
    
    const newLineTotal=(qty,price,index)=>{
        props.ordersList.selectedMenus[index].qty=qty
        props.ordersList.lineTotal[index]=(qty*price)
        props.updateTotal()
        console.log("looking"+props.ordersList.lineTotal[index])
        console.log("Total"+props.ordersList.total)
        console.log("updating... lineTotal ,"+(qty*price))
        settemp(!temp)
        
        
    }
    const newOrderTotal=()=>{
        console.log('updating...orderTotal')

    }

    //pickup templates
    const delivery=()=> {
        return(
    <>
    <div>
    <Formik initialValues={{
                postCode:'',
                clientAddress:'',
                guestNumber:1,
                clientName:'',
                email:'',
                phone:'',
                specialRequest:''

            }} 
         validationSchema={
                Yup.object({
                reservationDate:Yup.date("Please Choose a valid Date for reservation").required('This field is required'),
                //reservationTime:Yup.time("please choose a valid time for reservation").required("Please choose a time for reservation"),
                postCode:Yup.string("Please Enter a Number").required("Please Enter Number of Guest"),
                clientName:Yup.string("Please Enter A Valid Name").required("Name field can't be empty"),
                clientAddress:Yup.string().required("Please E-mail field can't be empty"),
                 phone:Yup.number("Please Enter a valid Phone number").required("The Phone field can't be Empty"),
                specialRequest:Yup.string("")
            })}  
            
            
        onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}>
        <Form >
       
        
                     
    
        
                        <div className='form-g'>
                        <label htmlFor='clientName'>Name:</label>
                            <Field name='clientName'   />
                            <ErrorMessage name='clientName' />

                        </div>
                        <div className='form-g'>
                            <label htmlFor='phone'>Phone</label>
                            <Field name='phone' type='number' />
                            <ErrorMessage name='phone' />
                            
                        </div>
         
                        <div className='form-g'>
                        <label htmlFor='postCode'>Post Code:</label>
                            <Field name='postCode'   />
                            <ErrorMessage name='postCode' />

                        </div>
                        <div className='form-g'>
                        <label htmlFor='clientAddress'>Address:</label>
                            <Field name='clientAddress'   />
                            <ErrorMessage name='clientAddress' />

                        </div>
            
            

      
        </Form>


            </Formik>
    </div>
    </>
)
}  
    const pickUp=()=>{
        return(
            <>
             <label>Name:</label>
        <input type='text' />
        <TimePicker
  
  referenceDate={dayjs()}
/>
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
            <p>{props.ordersList.selectedMenus.length}</p>
            <div className='orders'>

<Modal
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
    <div>
        <table className='orders_t'>
            <thead>
            <tr>
                <th>Menu Name</th>
                <th>Qty.</th>
                <th>£</th>

            </tr>
        </thead>
        <tbody>

       
        {
            props.ordersList.selectedMenus.map((orderItem, index) => {
               return(
                <tr key={index}>
                <td>{orderItem.name}</td>
                <td><input type='number'  min={1} max={orderItem.max} step={1} onChange={(e)=>{newLineTotal(e.target.value,orderItem.price,index)}} /></td>
                <td>{Number(props.ordersList.lineTotal[index]).toFixed(2)}</td>
                </tr>
               )
            })
        }
        </tbody>
         </table>
         <hr />
         <div>
            <FormControl>
                <FormLabel>Delivery Options</FormLabel>
                <RadioGroup
                row 
                value={selectedDelivery}
                onChange={handleDeliveryChanged}
                >
                    <FormControlLabel value="inHouse" control={<Radio />} label="In House"/>
                    <FormControlLabel value="pickup" control={<Radio />} label="Pick Up"/>
                    <FormControlLabel value="delivery" control={<Radio />} label="Delivery" id='fu'/>
                </RadioGroup>
            </FormControl>


         </div>
         <div className='deliveryOptions'>
            {
            selectedDelivery=="pickup"?pickUp():selectedDelivery=="delivery"?delivery():inHouse()
            }

         </div>
         <div className='total_order'>
            <p>Total (£): <span>{Number(props.ordersList.total).toFixed(2)}</span></p>
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
