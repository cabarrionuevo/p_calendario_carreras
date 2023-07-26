'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserRace extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // UserRace.belongsTo(models.RaceState,{
      //   as: 'racestate'})
    }
  }
  UserRace.init({
    userId: DataTypes.INTEGER,
    raceID: DataTypes.INTEGER,
    netTime: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'UserRace',
  });
  return UserRace;
};