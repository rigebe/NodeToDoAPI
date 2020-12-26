const { Sequelize } = require('../models');
const models = require('../models/index')
const Joi = require('hapi/node_modules/joi');

async function get_tasks(request, h) {
    try {
      let tasks = await models.Task.findAll({order: [['number', 'asc']]});
      return tasks;
    } 
    catch(e) {
      console.log(e.name + ' ' + e.message);
    }
  }

  async function get_lists(request, h) {
    try {
      let lists = await models.List.findAll();
      return lists;
    } 
    catch(e) {
      console.log(e.name + ' ' + e.message);
    }
  }

  async function post_list(request, h) {
    try {
      await models.List.create(request.payload);
      return h.response(request.payload).code(200);
    } 
    catch(e) {
      console.log(e.name + ' ' + e.message);
    }
  }

  async function post_task(request, h) {
    try {
      await models.Task.create(request.payload);
      return h.response(request.payload).code(200);
    } 
    catch(e) {
      console.log(e.name + ' ' + e.message);
    }
  }

  async function set_task_true(request, h) {
    try {
      const task = await models.Task.findOne({where: {id: request.params.id}})
      task.status = true;
      task.save();
      return task;
    } 
    catch(e) {
      console.log(e.name + ' ' + e.message);
    }
  }

  async function set_task_false(request, h) {
    try {
      const task = await models.Task.findOne({where: {id: request.params.id}})
      task.status = false;
      task.save();
      return task;
    } 
    catch(e) {
      console.log(e.name + ' ' + e.message);
    }
  }

  async function set_task_number(request, h) {
    try {
      const task = await models.Task.findOne({where: {id: request.params.id}})
      task.number = input.number;
      task.save();
      return task;
    } 
    catch(e) {
      console.log(e.name + ' ' + e.message);
    }
  }

  module.exports = [{
    method: 'GET',
    path: '/tasks',
    options: { 
      handler: get_tasks
    }
  },{
    method: 'GET',
    path: '/lists',
    options: { 
      handler: get_lists
    }
  },{
    method: 'POST',
    path: '/lists',
    options: { 
      handler: post_list, 
      validate: {
        payload: {
          Name: Joi.string().min(1).max(20).required()
        }
      }
    }
  },{
    method: 'POST',
    path: '/tasks',
    options: { 
      handler: post_task, 
      validate: {
        payload: {
          text: Joi.string().min(1).max(50).required(),
          status: Joi.boolean().required(),
          number: Joi.number().integer().required(),
          list_id: Joi.number().integer().required()
        }
      }
    }
  },{
    method: 'GET',
    path: '/tasks/{id}/true',
    options: { 
      handler: set_task_true
    }
  },{
    method: 'GET',
    path: '/tasks/{id}/false',
    options: { 
      handler: set_task_false
    }
  },{
    method: 'GET',
    path: '/tasks/{id}',
    options: { 
      handler: set_task_number
    }
  }];