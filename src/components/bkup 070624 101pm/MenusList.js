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
            name:'Full English Breakfast',
            image:burger,
            price:11.00,
            qty:1,
            max:10,
            menu_category:'breakfast',
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
            name:'Small portion of English breakfast £6.60  Serve with bacon, sausage, Black pudding, mushroom eggs and beans',
            options:['Palmnut Soup','Groundnut Soup'],
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
            name:'Small portion of English breakfast £6.60  Serve with bacon, sausage, Black pudding, mushroom eggs and beans',
            options:['Palmnut Soup','Groundnut Soup'],
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
            name:'Egg Benedict Canadian bacon serve on toasted English muffin, poached eggs and French hollandaise sauce  ',
            options:['Palmnut Soup','Groundnut Soup'],
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
            name:'Egg royal Smoke salmon serve on toasted English muffin with butter sauce ',
            options:['Palmnut Soup','Groundnut Soup'],
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
            name:'Poached eggs or scrambled eggs Serve on a bed of wholemeal toast ',
            options:['Palmnut Soup','Groundnut Soup'],
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
            options:['Palmnut Soup','Groundnut Soup'],
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
        {id:9, 
            name:'Sausage on mush with caramelised onion jus and  carrots',
            options:['Palmnut Soup','Groundnut Soup'],
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
            options:['Palmnut Soup','Groundnut Soup'],
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
        {id:9, 
            name:'Lite bites smashed avocado with smoke salmon on toast ',
            options:['Palmnut Soup','Groundnut Soup'],
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
        {id:9, 
            name:'Brie bacon and cranberry ciabatta ',
            options:['Palmnut Soup','Groundnut Soup'],
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
        {id:9, 
            name:'Halloumi lettuce and tomato ciabatta ',
            options:['Palmnut Soup','Groundnut Soup'],
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
        {id:9, 
            name:'Goat cheese and caramelised onion tart ',
            options:['Palmnut Soup','Groundnut Soup'],
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
        {id:9, 
            name:'Chicken kebab wrap, salad and potato wedges ',
            options:['Palmnut Soup','Groundnut Soup'],
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
        {id:9, 
            name:'Roasted vegetable with pesto ciabatta ',
            options:['Palmnut Soup','Groundnut Soup'],
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
        {id:9, 
            name:'Seafood Linguine in white wine ',
            options:['Palmnut Soup','Groundnut Soup'],
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
        {id:9, 
            name:'Turkish menemen spice vegetable in a chilli tomato sauce serve with egg, salad and warm ciabatta ',
            options:['Palmnut Soup','Groundnut Soup'],
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
        {id:9, 
            name:'Orange Juice',
            options:['Palmnut Soup','Groundnut Soup'],
            price:11.00,
            qty:1,
            max:3,
            menu_category:'drinks',
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
            name:'Mango juice',
            options:['Palmnut Soup','Groundnut Soup'],
            price:11.00,
            qty:1,
            max:3,
            menu_category:'drinks',
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
            name:'Apple juice',
            options:['Palmnut Soup','Groundnut Soup'],
            price:11.00,
            qty:1,
            max:3,
            menu_category:'drinks',
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
            name:'Crumble Juice',
            options:['Palmnut Soup','Groundnut Soup'],
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
            name:'Tomato Juice',
            options:['Palmnut Soup','Groundnut Soup'],
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
            name:'Glass of milk',
            options:['Palmnut Soup','Groundnut Soup'],
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
            name:'Red Wine',
            options:['Palmnut Soup','Groundnut Soup'],
            price:11.00,
            qty:1,
            max:3,
            menu_category:'drinks',
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
            name:'White Wine',
            options:['Palmnut Soup','Groundnut Soup'],
            price:11.00,
            qty:1,
            max:3,
            menu_category:'drinks',
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


  return (
    <div className='mg-t-1'>
          
          <div className='filter-container'>
                <h5>Filters</h5>
            <div className='filter-buttons'>
                <button>
                    All
                </button>
                <button>
                   Breakfast
                </button>
                <button>
                    Brunch
                </button>
                <button>
                    Chef's Special
                </button>
                <button>
                    Juices/Milk and Wine
                </button>

            </div>
            <hr />
            </div>
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
                  <p >£ <span className='price'>{Number(menu.price).toFixed(2)}</span></p>
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
