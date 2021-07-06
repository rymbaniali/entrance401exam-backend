'use strict';

const DrinkSchemaModel = require('../collection/schema.mongoose')

const createFavDrink = () => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic/createFav`
    DrinkSchemaModel.find({}, (error, data) => {
        if (error) {
            res.send(error)
        } else {
            if (data.length == 0) {
                let newDrinkSchemaModel = new DrinkSchemaModel({
                    strDrink: strDrink,
                    strDrinkThumb,
                    idDrink: idDrink
                })
                newDrinkSchemaModel.save();
            }
        }
    })


}

module.exports = createFavDrink;