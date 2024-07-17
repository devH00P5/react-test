import React , { useContext, useState,useEffect } from 'react'
import burger from '../imgs/burger_8648590.png';
import OrdersList from './Buttons/OrdersList';
import { OrdersListContext } from '../Contexts/OrdersContext';
import axios from 'axios';


export default function MenusList() {


    const {orders,setorders,updateTotal,lineTotal,removeOrderItem,newLineTotal,orderQuantity,ordersTotal,setordersTotal,setorderQuantity,updateQty,addOrder,pickupPercent}=useContext(OrdersListContext);
    //menu from API
    const [menus,setMenus] = useState([])
    const [filter, setfilter] = useState([]);
    const [menuCategories,setMenuCategories]=useState([])
    useEffect(() => {
        axios.get('https://restaurant-service-9ee4.onrender.com/api/v1/foodmenu')
        .then(function (response) {
            console.log(response.data)
            setMenus( response.data)
            setfilter(response.data)
        })
        .catch(function (error) {
            console.log(error)
        })

        //Categories
        axios.get('https://restaurant-service-9ee4.onrender.com/api/v1/category')
        .then(function (response) {
            console.log(response.data)
            setMenuCategories( response.data)
        })
        .catch(function (error) {
            console.log(error)
        })


    }, []);
 
    //End Menu from API
    //menu
    const menuList=[
        {
            id:1,
            name:'Full English Breakfast',
            image:burger,
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
            name:'Small portion of English breakfast   ',
            options:'Serve with bacon, sausage, Black pudding, mushroom eggs and beans',
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
            name:'Small portion of English breakfast ',
            options:' Serve with bacon, sausage, Black pudding, mushroom eggs and beans',
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
            name:'Egg Benedict Canadian bacon ',
            options:'serve on toasted English muffin, poached eggs and French hollandaise sauce  ',
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
            name:'Egg royal Smoke salmon ',
            options:'serve on toasted English muffin with butter sauce ',
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
            name:'Poached eggs or scrambled eggs  ',
            options:'Serve on a bed of wholemeal toast',
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
            name:'Smoke mackerel salad with horseradish mayo ',
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
        ,
        {id:8, 
            name:'Sausage on mush with caramelised onion jus and  carrots',
            options:'',
            price:11.00,
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
        ,
        {id:9, 
            name:'Cajun chicken salad with rosemary dressing ',
            options:'',
            price:9.50,
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
        ,
        {id:10, 
            name:'Lite bites smashed avocado with smoke salmon on toast ',
            options:'',
            price:9.50,
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
        ,
        {id:11, 
            name:'Brie bacon and cranberry ciabatta ',
            options:'',
            price:8.50,
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
        ,
        {id:12, 
            name:'Halloumi lettuce and tomato ciabatta ',
            options:'',
            price:8.50,
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
        ,
        {id:13, 
            name:'Goat cheese and caramelised onion tart ',
            options:'',
            price:8.00,
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
        ,
        {id:14, 
            name:'Chicken kebab wrap, salad and potato wedges ',
            options:'',
            price:8.00,
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
        ,
        {id:15, 
            name:'Roasted vegetable with pesto ciabatta ',
            options:'',
            price:8.50,
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
        ,
        {id:16, 
            name:'Seafood Linguine in white wine ',
            options:'',
            price:16.50,
            qty:1,
            max:3,
            menu_category:'special',
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
        ,
        {id:17, 
            name:'Turkish menemen spice vegetable in a chilli tomato sauce serve with egg, salad and warm ciabatta ',
            options:'',
            price:15.00,
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
        ,
        {id:18, 
            name:'Orange Juice',
            options:'',
            price:11.00,
            qty:1,
            max:3,
            menu_category:'Juice',
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
        ,
        {id:19, 
            name:'Mango juice',
            options:'',
            price:11.00,
            qty:1,
            max:3,
            menu_category:'Juice',
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
        ,
        {id:20, 
            name:'Apple juice',
            options:'',
            price:11.00,
            qty:1,
            max:3,
            menu_category:'Juice',
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
        ,
        {id:21, 
            name:'Crumble Juice',
            options:'',
            price:11.00,
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
        ,
        {id:22, 
            name:'Tomato Juice',
            options:'',
            price:11.00,
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
        ,
        {id:23, 
            name:'Glass of milk',
            options:'',
            price:11.00,
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
        ,
        {id:24, 
            name:'Red Wine',
            options:'',
            price:11.00,
            qty:1,
            max:3,
            menu_category:'Wine',
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
        ,
        {id:25, 
            name:'White Wine',
            options:'',
            price:11.00,
            qty:1,
            max:3,
            menu_category:'Wine',
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
        ,
       
        
    ]

   
   
    //filters Code//
    const selectedfilter=(menu)=>{
        
           menu=='All'?setfilter(menus):setfilter(menus.filter((menuItem)=>menuItem.categoryId==menu))
    }
    //End Filters Code


  return (

    <div className='mg-t-1'>
             <div className="header ht1">
        <h1>
          Our Menu
        </h1>
        <p>
        Making every bite a symphony of flavors
        </p>
        <hr/>
      </div>
      
          
          <div className='filter-container'>
     
                <h5>Filters</h5>
            <div className='filter-buttons'>
                <button onClick={()=>selectedfilter('All')}>
                    All
                </button>

                {
                    menuCategories.length!=0?
                    menuCategories.map((category,index)=>{
                        return(  
                             <button key={index} onClick={()=>selectedfilter(category.id)}>
                        {category.name}
                    </button>
                   )
                     
                       
                    }) :<p></p>
                }
                
            </div>
            <hr />
            </div>
        <div className='menus menu-pg'>
           
        {
            
            
            filter.map((menu,index)=>{ 
    
               return( 
               
                
                      <div className='menu_card-3'  key={index}>
                        <div className={menu.description!=''?'description':'description desc_center'} >
                <div className='menu_img'>
                    <img src={burger} alt='burger Image' />
                </div>
                <div className='menu_desc'>
                  <p className='menu_name'>{menu.name}</p>
                  </div>
                  </div>
                  <div className={menu.description!=''?'option_details':'opt_none'}>
                  <p>{menu.description}</p>
             
                  
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
