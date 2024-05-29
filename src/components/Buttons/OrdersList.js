import { Box, Modal, Typography } from '@mui/material';
import React ,{useState} from 'react';

const OrdersList = (props) => {

    const [modalDisplay, setmodalDisplay] = useState(false);
    const showModal=()=>{
        setmodalDisplay(true);
    }

    const hideModal=()=>{
        setmodalDisplay(false);
    }
    
    
  

    return (
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
            <p>{props.ordersList.length}</p>
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
            <tr>
                <th>Menu Name</th>
                <th></th>
                <th>£</th>

            </tr>

       
        {
            props.ordersList.map((orderItem, index) => {
               return(
                <tr>
                <td>{orderItem.name}</td>
                <td><input type='number'  min={1} max={orderItem.max} step={1}/></td>
                <td>{orderItem.price}</td>
                </tr>
               )
            })
        }
         </table>
         <div className='total_order'>
            <p>Total: <span></span></p>

         </div>

    </div>
  </Box>
</Modal>
     

            </div>
        </div>
    );
}

export default OrdersList;
