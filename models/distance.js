'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Distance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Distance.init({
    distance: DataTypes.INTEGER,
    measure: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Distance',
  });
  return Distance;
};