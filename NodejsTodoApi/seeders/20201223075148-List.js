'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('lists', [{
        Name: 'Description',
        createdAt: new Date(),
        updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('lists', null, {}); 
  }
};
