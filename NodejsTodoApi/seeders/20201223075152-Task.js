'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Task', [{
      Text: '1',
      Status: false,
      Number: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
    await queryInterface.bulkInsert('Task', [{
      Text: '2',
      Status: false,
      Number: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});  
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Task', null, {}); 
  }
};
