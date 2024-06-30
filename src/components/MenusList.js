import React , { useState } from 'react'
import burger from '../imgs/burger_8648590.png';
import OrdersList from './Buttons/OrdersList';
import { OrdersListContext } from '../Contexts/OrdersContext';

export default function MenusList() {
    //Test Values
    const [orderQuantity, setorderQuantity] = useState(1);

    //End Test Values
    const [refresh, setrefresh] = useState(false);
    //orders
    const [ordersList, setordersList] = useState([]);

    const [ordersTotal, setordersTotal] = useState(0.00)

    const [orders, setorders] = useState({
        selectedMenus:[],
        lineTotal:[],
        total:ordersTotal,
        deliveryType:'',

    });

    const updateQty=(qty,index)=>{
        console.log(orders.selectedMenus[index])
        console.log(qty)
        orders.selectedMenus[index].qty=qty;
        console.log(orders.selectedMenus[index].qty)
        setorders({...orders})
        console.log(orders.selectedMenus[index])

    }

    const removeOrderItem=(index)=>{
        console.log("Triggered-are you trying to delete me"+index)
        const menuItem=orders.selectedMenus[index];   
        setordersTotal(ordersTotal-(menuItem.qty*menuItem.price))
        updateQty(1,index)
       orders.selectedMenus[index]=1
        const newOrders=orders.selectedMenus.splice(index,1)
       // setrefresh(!refresh)
        console.log(orders)
        console.log(ordersList)
       setorders({...orders}) 
       
        
      
    }

    //Pickup 25% calc
   const [pickupPercent, setpickupPercent] = useState(0.25*ordersTotal);
   //End Pickup Calc

   
    //new code
    const lineTotal=(price,qty)=>{
        console.log("updating line Total",price*qty)
        orders.lineTotal.push(price*qty)
        setorders({...orders})
    }

    //End New
    const updateTotal=()=>{
     // orders.total=orders.total+price;
     // console.log(orders.total)
     var newTotal=orders.lineTotal.reduce((accumulator, currentValue) => {
        return accumulator+currentValue
     }, 0.00)
     setorders({...orders,['total']:newTotal})
     setrefresh(!refresh)
     setpickupPercent(0.25*orders.total)
    }

    const addOrder=(menu)=>{

        if(orders.selectedMenus.length > 0){ 
            
            if((orders.selectedMenus.findIndex(e=>e.id===menu.id))<0){
             //setordersList((prev)=>[...prev,menu])
             //setorders({...orders,['selectedMenus']:ordersList})
             orders.selectedMenus.push(menu)
             //New
             lineTotal(menu.price,menu.qty)
             setordersTotal(ordersTotal+menu.price)
             //end

             updateTotal()
             console.log('Order-'+ orders.selectedMenus.length)
             console.log('OrdersList-'+ ordersList)
        }
        }
        else{

            console.log('Hunnie')
            //setordersList((prev)=>[...prev,menu])
            orders.selectedMenus.push(menu)
            //New
            lineTotal(menu.price,menu.qty)
            setordersTotal(ordersTotal+menu.price)
            //end
            updateTotal()
            console.log('Order-'+ orders.selectedMenus.length)
            console.log('OrdersList-'+ ordersList)

        }
       
       

    }

    //LineTotal
    const newLineTotal=(qty,price,index)=>{
        orders.selectedMenus[index].qty=qty
        lineTotal[index]=(qty*price)
        updateTotal()
         console.log("looking"+orders.lineTotal[index])
         console.log("Total"+orders.total)
         console.log("updating... lineTotal ,"+(qty*price))
         setorders({...orders})   
     }
   


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
    const [filter, setfilter] = useState(menuList);
    //filters Code//
    const selectedfilter=(menu)=>{
        
           menu=='All'?setfilter(menuList):setfilter(menuList.filter((menuItem)=>menuItem.menu_category==menu))
        
       
      
    }
    //End Filters Code


  return (

    <div className='mg-t-1'>
      
          
          <div className='filter-container'>
          <div className="header ht1">
        <h1>
          Our Menu
        </h1>
        <p>
        Making every bite a symphony of flavors
        </p>
        <hr/>
      </div>
                <h5>Filters</h5>
            <div className='filter-buttons'>
                <button onClick={()=>selectedfilter('All')}>
                    All
                </button>
                <button onClick={()=>selectedfilter('breakfast')}>
                   Breakfast
                </button>
                <button onClick={()=>selectedfilter('brunch')}>
                    Brunch
                </button>
                <button onClick={()=>selectedfilter('special')}>
                    Chef's Special
                </button>
                <button onClick={()=>selectedfilter('Juices')}>
                    Juices
                </button>
                <button onClick={()=>selectedfilter('Milk')}>
                    Milk 
                </button>
                <button onClick={()=>selectedfilter('Wine')}>
                    Wine
                </button>

            </div>
            <hr />
            </div>
        <div className='menus menu-pg'>
        {
            filter.map((menu,index)=>{
               return( 
                
                      <div className='menu_card-3'  key={index}>
                        <div className={menu.options!=''?'description':'description desc_center'} >
                <div className='menu_img'>
                    <img src={burger} alt='burger Image' />
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
        <OrdersListContext.Provider value={{orders,setorders,removeOrderItem,updateTotal,lineTotal,newLineTotal, orderQuantity, setorderQuantity,ordersTotal,setordersTotal,updateQty}}>
        <OrdersList  updateTotal={updateTotal} pickupPercent={pickupPercent} removeOrderItem={removeOrderItem}/>
        </OrdersListContext.Provider>
    </div>
  )
}
