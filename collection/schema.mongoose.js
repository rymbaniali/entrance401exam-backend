'use strict'

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DrinkSchema = new Schema({
 
    strDrink: {
    type: String,
    
  },
  strDrinkThumb: {
    type: String,
    
  },
  idDrink: {
    type: number,
    unique:true
  }
});

// This creates our model from the above schema, using mongoose's model method
const DrinkSchemaModel = mongoose.model("Drinks", DrinkSchema);

// Export the Article model
module.exports = DrinkSchemaModel;