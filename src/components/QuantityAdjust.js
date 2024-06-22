import React from 'react'
import {useState,useContext} from "react";
import { OrdersListContext } from '../Contexts/OrdersContext';
import { useEffect } from 'react';

export default function QuantityAdjust(props) {
    const {orders,setorders,updateTotal,lineTotal,newLineTotal,orderQuantity, setorderQuantity,ordersTotal,setordersTotal,updateQty}=useContext(OrdersListContext);
    const [qty, setqty] = useState(props.qty);
    
 

    const increaseQty=()=>{
        var newQty=qty

        setqty(qty+1)
        setorderQuantity(qty)
     
        updateQty(++newQty,props.index);
        setordersTotal(ordersTotal+props.price)
      
     
    } 
    const decreaseQty=()=>{
        if(qty>1){
            var newQty=qty
            setqty(qty-1)
            setorderQuantity(qty)
            updateQty(--newQty,props.index);
            setordersTotal(ordersTotal-props.price)
        }
       

    }
  return (
    <div className='qty-stepper'>
        <button onClick={decreaseQty}>-</button>
        <p>{qty}</p>
        <button onClick={increaseQty}>+</button>
        
      
    </div>
  )
}
