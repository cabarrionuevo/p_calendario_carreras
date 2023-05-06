'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Owners', [
      {id: 1, nombre: 'Club de corredores',website:"",createdAt: new Date(),updatedAt: new Date()},
      {id: 2, nombre: 'Sportfacilities',website:"",createdAt: new Date(),updatedAt: new Date()},
      {id: 3, nombre: 'I love run',website:"",createdAt: new Date(),updatedAt: new Date()},
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
