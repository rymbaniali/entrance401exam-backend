'use strict'

const DrinkSchemaModel = require('../collection/schema.mongoose')

const getFavDrinks=()=>{

    const url=`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic/readFav`

    let {strDrink,strDrinkThumb,idDrink}=req.body;

    DrinkSchemaModel.filte({ }, (error,data) =>{
        if (error){
            res.send(error)
        }else{
            res.send(data)
        }
    })
}

module.exports=getFavDrinks;