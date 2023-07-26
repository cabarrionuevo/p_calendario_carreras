'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Races', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        unique: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull:false

      },
      date: {
        type: Sequelize.DATE,
        allowNull:false
      },
      ownerId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'Owners', //nombre de la tabla en base de datos
          key: 'id'
        }
      },
      typeId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Types', //nombre de la tabla en base de datos
          key: 'id'
        }
      },
      lugar: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Races');
  }
};