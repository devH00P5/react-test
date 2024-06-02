import React , { useState } from 'react'
import burger from '../imgs/burger_8648590.png';
import OrdersList from './Buttons/OrdersList';

export default function MenusList() {

    //orders
    const [ordersList, setordersList] = useState([]);

    const [ordersTotal, setordersTotal] = useState(0.00)

    const [orders, setorders] = useState({
        selectedMenus:[],
        lineTotal:[],
        total:0.00,
        deliveryType:'',

    });
    //new code
    const lineTotal=(price,qty)=>{
        console.log("updating line Total",price*qty)
        orders.lineTotal.push(price*qty)
    }

    //End New
    const updateTotal=()=>{
     // orders.total=orders.total+price;
     // console.log(orders.total)
     orders.total=orders.lineTotal.reduce((accumulator, currentValue) => {
        return accumulator+currentValue
     }, 0.00)
    }

    const addOrder=(menu)=>{

        if(ordersList.length > 0){ 
            
            if((ordersList.findIndex(e=>e.id===menu.id))<0){
             setordersList((prev)=>[...prev,menu])
             //setorders({...orders,['selectedMenus']:ordersList})
             orders.selectedMenus.push(menu)
             //New
             lineTotal(menu.price,menu.qty)
             //end

             updateTotal()
             console.log('Order-'+ orders.selectedMenus.length)
             console.log('OrdersList-'+ ordersList)
        }
        }
        else{
            setordersList((prev)=>[...prev,menu])
            orders.selectedMenus.push(menu)
            //New
            lineTotal(menu.price,menu.qty)
            //end
            updateTotal()
            console.log('Order-'+ orders.selectedMenus.length)
            console.log('OrdersList-'+ ordersList)

        }
       
       

    }
   


    //menu
    const menuList=[
        {
            id:1,
            name:'Fufu',
            image:burger,
            price:13.00,
            qty:2,
            max:10,
            options:['Palmnut Soup','Groundnut Soup','Light Soup'],
            proteins:[{
                proteinName:'Fish',
                Price:5.00
            },
            {
                proteinName:'Meat',
                Price:5.00
            }
        ]
        },
           {id:2, 
            name:'Rice Balls',
            options:['Palmnut Soup','Groundnut Soup'],
            price:14.00,
            qty:1,
            max:3,
            proteins:[{
                proteinName:'Fish',
                Price:5.00
            },
            {
                proteinName:'Meat',
                Price:5.00
            }
        ]
        },
    ]


  return (
    <div className='mg-t-1'>
        <div className='menus menu-pg'>
        {
            menuList.map((menu,index)=>{
               return( 
                
                      <div className='menu_card ' key={index}>
                <div className='menu_img'>
                    <img src={burger} alt='burger Image' />

                </div>
                <div className='menu_desc'>
                  <p className='menu_name'>{menu.name}</p>
                  <p >£ <span className='price'>{menu.price}</span></p>
                  <p className='default-btn' ><button onClick={()=>addOrder(menu)}>Add to Orders</button></p>
                  

                </div>

              </div>

               
     
                )
            })
        } 
        </div>
        <OrdersList ordersList={orders} updateTotal={updateTotal}/>
    </div>
  )
}
