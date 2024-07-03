import React,{ useState }  from 'react'
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
    Afro Weekend Menu
  </h1>
  <hr/>
</div>
      </div>
  <div className='menus menu-pg'>
  {
      filter.map((menu,index)=>{
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
  <OrdersListContext.Provider value={{orders,setorders,removeOrderItem,updateTotal,lineTotal,newLineTotal, orderQuantity, setorderQuantity,ordersTotal,setordersTotal,updateQty}}>
  <OrdersList  updateTotal={updateTotal} pickupPercent={pickupPercent} removeOrderItem={removeOrderItem}/>
  </OrdersListContext.Provider>
</div>

  )
}
