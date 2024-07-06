import './App.css';
import { useState } from 'react';
import { OrdersListContext } from './Contexts/OrdersContext';
import Afro_weekendMenu from './components/Afro_weekendMenu';
import BookTable from './components/BookTable';
import Home from './components/Home';
import MenusList from './components/MenusList';
import Nav from './components/header/Nav';

import { BrowserRouter as Router,Link,Routes,Route } from 'react-router-dom';
import { useEffect } from 'react';


function App() {

  //refactor codes
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
      //Pickup 25% calc
  const [pickupPercent, setpickupPercent] = useState(0.00);
  //End Pickup Calc

  useEffect(() => {
    
   setpickupPercent(.25*ordersTotal)
  }, [ordersTotal]);
   const updateQty=(qty,index)=>{
       console.log(orders.selectedMenus[index])
       console.log(qty)
       orders.selectedMenus[index].qty=qty;
       console.log(orders.selectedMenus[index].qty)
       setorders({...orders})
       setpickupPercent(0.25*orders.total)
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
  
  //End Refactor codes









  return (
    <div className="App">
      <Nav/>
   <OrdersListContext.Provider value={{orders,setorders,removeOrderItem,updateTotal,lineTotal,newLineTotal, orderQuantity, setorderQuantity,ordersTotal,setordersTotal,updateQty,addOrder,pickupPercent}} >
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/react-test' element={<Home/>} />
          <Route path='/reservation' element={<BookTable/>} />
          <Route path='/menu' element={<MenusList/>} />
          <Route path='/afroweekend' element={<Afro_weekendMenu/>} />
          

        </Routes>
      </OrdersListContext.Provider>

     
      


    
    </div>
  );
}

export default App;
