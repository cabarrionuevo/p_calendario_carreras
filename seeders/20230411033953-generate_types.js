'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Types', [
      {id: 1, description: 'Carrera de calle',createdAt: new Date(),updatedAt: new Date()},
      {id: 2, description: 'Trail',createdAt: new Date(),updatedAt: new Date()},
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
