const models = require('../models')

async function response(request, h) {
    return list
  }
  
  module.exports = {
    method: 'GET',
    path: '/lists',
    options: { 
      handler: models.list.findAll()
    }
  };