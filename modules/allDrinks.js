'use strict'
const axios = require('axios');

const getAllDrinks = () => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`

    axios.get(url).then(response => {
        res.send(response.data.results);
    }).catch(error => {
        res.send(error)
    })
}

module.exports = getAllDrinks;