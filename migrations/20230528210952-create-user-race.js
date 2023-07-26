'use strict';

const race = require('../models/race');
const user = require('../models/user');
const raceState = require('../models/racestate');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UserRaces', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        references:{
          model: {
            tablename: 'Users'
          },
          key: 'id'
        }
      },
      raceId: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tablename: 'Races'
          },
          key: 'id'
        }
      },
      stateId:{
        type: Sequelize.INTEGER,
        references:{
          model: {
            tablename: 'RaceStates'
          },
          key: 'id'
        }
      },
      netTime: {
        type: Sequelize.TIME
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
    await queryInterface.dropTable('UserRaces');
  }
};