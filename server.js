'use strict'
//require packages

const express=require("express");
const cors =require("cors")
//requiremongoose
const mongoose=require("mongoose");

//initalize the app
const app=express();

//middleware
app.use(cors());
app.use(express.json());

//require dotenv
require ("dotenv").config();

//define PORT
const PORT=process.env.PORT;

//coneect mongoose 
mongoose.connect("mongodb://localhost:27017/Drinks", { useNewUrlParser: true });

//require functions
const getAllDrinks= require('./modules/allDrinks')
const createFavDrink=require("./modules/createDrinks")
const updateFav=require ('./modules/updateFav');
const deleteFavDrink=require('./modules/deleteFav');
const getFavDrinks=require('./modules/getFavDrink')

//endpoints 
app.get('/',(req,res)=>{
    res.send(`working`)
})
app.get('/drinks',getAllDrinks);


//curd endpoints
app.post('/createFav',createFavDrink)
app.get('./readFav',getFavDrinks)
app.put('./update',updateFav)
app.delete('./delete/:idNum',deleteFavDrink)

//proof end point 
app.listen(PORT,(req,res)=>{
    console.log(`working on ${PORT}`);
}
)
