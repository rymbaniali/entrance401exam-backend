'use strict'

const DrinkSchemaModel = require('../collection/schema.mongoose')

const updateFav=()=>{

    const url=`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic/update`

    let {strDrink,strDrinkThumb,idDrink}=req.body;

    DrinkSchemaModel.updateOne({idDrink:idDrink},{$set: strDrink,strDrinkThumb,idDrink }, (error,data) =>{
        if (error){
            res.send(error)
        }else{
            res.send(data)
        }
    })
}

module.exports=updateFav;