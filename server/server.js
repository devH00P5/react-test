const express = require("express");
const app = express();
const { resolve } = require("path");
const cors = require("cors");
const axios =require('axios');
// Replace if using a different env file or config
const env = require("dotenv").config({ path: "./.env" });

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-08-01",
});

app.use(express.static(process.env.STATIC_DIR));
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get("/", (req, res) => {
  const path = resolve(process.env.STATIC_DIR + "/index.html");
  res.sendFile(path);
});

app.get("/config", (req, res) => {
  res.send({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  });
});
//
app.post("/create-payment-intent", async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      currency: "EUR",
      amount: 1999,
      automatic_payment_methods: { enabled: true },
    });

    // Send publishable key and PaymentIntent details to client
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (e) {
    return res.status(400).send({
      error: {
        message: e.message,
      },
    });
  }
});


app.post("/create-checkout-session",async(req,res)=>{
  //console.log(req.body)
  const {orderItems} = req.body;
  const {order}=req.body
  const testServer=req.body
  //console.log(testServer)
  //console.log(order)
  //console.log(orderItems)

  axios.post('https://restaurant-service-9ee4.onrender.com/api/v1/orders/client-order', testServer )
  .then(function (response) {
    console.log(response.data)
   
  })
  .catch(function (error) {
    console.log(error)
  })
  const lineItems=orderItems.map((product) => ({
    price_data:{
      currency:"EUR",
      product_data:{
        name:product.name,
       
      },
      unit_amount:product.price*100,
    },
    quantity:product.quantity


  })
)
const session=await stripe.checkout.sessions.create(
  {
    payment_method_types:["card"],
    line_items:lineItems,
    mode:"payment",
    success_url:"http://localhost:3000/success",
    cancel_url:"http://localhost:3000/cancel"
  }
)
res.json({
  id:session.id
})



})


/*app.post("/create-checkout-session",async(req,res)=>{
console.log(req.body)

})*/



app.listen(5252, () =>
  console.log(`Node server listening at http://localhost:5252`)
);
