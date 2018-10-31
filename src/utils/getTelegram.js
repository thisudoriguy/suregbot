const axios = require('axios');
require('dotenv').config();
const baseUrl = 'https://api.telegram.org/bot'
const token = process.env.token
const actions = '';
const URL = baseUrl + token + '/message'

// console.log(URL)

module.exports = async(foo) => {
    //i thought axios was supposed to be used here
   const response  = await axios.get(URL)

   return response.data.result.username
}