import React,{ useContext, useState }  from 'react'
import burger from '../imgs/burger_8648590.png';
import friedYam from '../imgs/afro_weekend/fried_yam.png';
import jollof from '../imgs/afro_weekend/jollof.png';
import tz from '../imgs/afro_weekend/TZ.png'
import waakye from '../imgs/afro_weekend/waakye.png'
import tuo from '../imgs/afro_weekend/tuo.png'
import fufu from '../imgs/afro_weekend/fufu.png'
import red_red from '../imgs/afro_weekend/red_red.png'
import OrdersList from './Buttons/OrdersList';
import { OrdersListContext } from '../Contexts/OrdersContext';

export default function Afro_weekendMenu() {
       
    const {orders,setorders,updateTotal,lineTotal,removeOrderItem,newLineTotal,orderQuantity,ordersTotal,setordersTotal,setorderQuantity,updateQty,addOrder,pickupPercent}=useContext(OrdersListContext);
    
        //menu
        const menuList=[
            {
                id:1,
                name:'Fried Yam with fish or turkey tail',
                image:friedYam,
                price:11.00,
                qty:1,
                max:10,
                menu_category:'breakfast',
                options:'',
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
                name:'TZ ',
                image:tz,
                options:'',
                price:6.60,
                qty:1,
                max:3,
                menu_category:'breakfast',
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
            {id:3, 
                name:'Red Red',
                image:red_red,
                options:' ',
                price:6.60,
                qty:1,
                max:3,
                menu_category:'breakfast',
                proteins:[{
                    proteinName:'Fish',
                    Price:5.00
                },
                {
                    proteinName:'Meat',
                    Price:5.00
                }
            ]
            },{id:4, 
                name:'Rice balls with peanut soup',
                image:tuo,
                options:' ',
                price:10.00,
                qty:1,
                max:3,
                menu_category:'breakfast',
                proteins:[{
                    proteinName:'Fish',
                    Price:5.00
                },
                {
                    proteinName:'Meat',
                    Price:5.00
                }
            ]
            },{id:5, 
                name:'Fufu',
                image:fufu,
                options:'',
                price:7.50,
                qty:1,
                max:3,
                menu_category:'breakfast',
                proteins:[{
                    proteinName:'Fish',
                    Price:5.00
                },
                {
                    proteinName:'Meat',
                    Price:5.00
                }
            ]
            },{id:6, 
                name:'Jollof with salad and meat or fish  ',
                image:jollof,
                options:'',
                price:7.50,
                qty:1,
                max:3,
                menu_category:'breakfast',
                proteins:[{
                    proteinName:'Fish',
                    Price:5.00
                },
                {
                    proteinName:'Meat',
                    Price:5.00
                }
            ]
            },{id:7, 
                name:'Waakye with meat or fish',
                image:waakye,
                options:'',
                price:10.50,
                qty:1,
                max:3,
                menu_category:'brunch',
                proteins:[{
                    proteinName:'Fish',
                    Price:5.00
                },
                {
                    proteinName:'Meat',
                    Price:5.00
                }
            ]
            }
         
           
            
        ]
       
  return (
    <div className='mg-t-1'>
      
          
    <div className='filter-container'>
    <div className="header ht1">
  <h1>
    Afro Weekend Menu
  </h1>
  <hr/>
</div>
      </div>
  <div className='menus menu-pg'>
  {
      menuList.map((menu,index)=>{
         return( 
          
                <div className='menu_card-3'  key={index}>
                  <div className={menu.options!=''?'description':'description desc_center'} >
          <div className='afro_img'>
              <img src={menu.image} alt='burger Image' />
          </div>
          <div className='menu_desc'>
            <p className='menu_name'>{menu.name}</p>
            </div>
            </div>
            <div className={menu.options!=''?'option_details':'opt_none'}>
            <p>{menu.options}</p>
       
            
            </div>
            <div className='buy-container'>  
                 <p >£ <span className='price'>{Number(menu.price).toFixed(2)}</span></p>
              <p className='default-btn' ><button onClick={()=>addOrder(menu)}>Buy</button></p>

            </div>

          

        </div>

         

          )
      })
  } 
  </div>

  <OrdersList  updateTotal={updateTotal} pickupPercent={pickupPercent} removeOrderItem={removeOrderItem}/>
 
</div>

  )
}
