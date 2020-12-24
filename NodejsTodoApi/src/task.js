const models = require('../models')

async function response(request, h) {

    try {
      let lists = await models.Task.findAll();
      return lists;
    } catch(e) {
      console.log(e.name + ' ' + e.message);
    }
  }
  
  module.exports = {
    method: 'GET',
    path: '/lists',
    options: { 
      handler: response
    }
  };