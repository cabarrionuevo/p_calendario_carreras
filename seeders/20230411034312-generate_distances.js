'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Distances', [
      {id: 1, distance: 2,measure:"km", createdAt: new Date(),updatedAt: new Date()},
      {id: 2, distance: 3,measure:"km", createdAt: new Date(),updatedAt: new Date()},
      {id: 3, distance: 7,measure:"km", createdAt: new Date(),updatedAt: new Date()},
      {id: 4, distance: 10,measure:"km", createdAt: new Date(),updatedAt: new Date()},
      {id: 5, distance: 15,measure:"km", createdAt: new Date(),updatedAt: new Date()},
      {id: 6, distance: 21,measure:"km", createdAt: new Date(),updatedAt: new Date()},
      {id: 7, distance: 30,measure:"km", createdAt: new Date(),updatedAt: new Date()},
      {id: 8, distance: 42,measure:"km", createdAt: new Date(),updatedAt: new Date()},
    ], {});    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
