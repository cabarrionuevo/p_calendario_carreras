'use strict';
const {
  Model
} = require('sequelize');
const userrace = require('./userrace');
const racestate = require('./racestate');
module.exports = (sequelize, DataTypes) => {
  class Race extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Race.belongsTo(models.Owner,{
        as: 'owner',
      });
      Race.belongsTo(models.Type,{
        as: 'type',
      });
      Race.belongsToMany(models.user,{through:models.UserRace});      
    }
  }
  Race.init({
    name: DataTypes.STRING,
    date: DataTypes.DATE,    
    lugar: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Race',
  });
  return Race;
};