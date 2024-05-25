import React from 'react'
import burger from '../imgs/burger_8648590.png';
import OrdersList from './Buttons/OrdersList';

export default function MenusList() {

    const menuList=[
        {
            id:1,
            name:'Fufu',
            image:burger,
            price:13.00,
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
                  <p className='default-btn'><button>Add to Orders</button></p>
                  

                </div>

              </div>

               
     
                )
            })
        } 
        </div>
        <OrdersList />
    </div>
  )
}