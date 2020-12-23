const db = require('../NodejsTodoApi/models')
const { sequelize } = require('sequelize')
const models = require('../NodejsTodoApi/models')

async function response(request, h) {
  let list = await models.List.findAll();
  return list ;  
}
  
  module.exports = {
    method: 'GET',
    path: '/',
    options: { 
      handler: response
    }
  };