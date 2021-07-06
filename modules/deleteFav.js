'use strict'

const DrinkSchemaModel = require('../collection/schema.mongoose')

const deleteFavDrink= ()=>{
    
    const url=`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic/delete/:idNum`
    DrinkSchemaModel.deleteOne({idNum:idNum},(error,data)=>{
        if(error)
        {
            res.send(error)
        }else {
            res.send(data)
        }
    })

}
module.exports=deleteFavDrink;