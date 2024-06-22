import React, { useState,useContext } from 'react'
import QuantityAdjust from './QuantityAdjust'
import { OrdersListContext } from '../Contexts/OrdersContext';

export default function CartMenuItem(props) {


    const {orders,updateTotal,lineTotal,newLineTotal}=useContext(OrdersListContext);
const [refresh, setrefresh] = useState(false);


  return (
    <div className='cartItem-card'>
        <div className='item-name'>
            <p>{props.cartItem.name}- £ <span>{Number(props.cartItem.price).toFixed(2)}</span></p>
        </div>
        <div className='actions'>
            <div className='remove'>
                <button onClick={
                    ()=>{props.removeOrderItem(props.index)
                        //setrefresh(!refresh)
                        
                    }

                }>Remove</button>

            </div>
            <div className='stepper'>
                <QuantityAdjust newLineTotal={props.newLineTotal} price={props.cartItem.price} index={props.index} updateTotal={props.updateTotal} qty={props.cartItem.qty} />
                
            </div>

        </div>

    </div>
  )
}
