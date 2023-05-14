'use strict';

const bcrypt = require('bcrypt');

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init({
    email: {
      type:DataTypes.STRING,
      unique:true,
      allowNull:false
    },
    password_hashed: DataTypes.STRING, /*hashed password*/
    password:DataTypes.VIRTUAL,
    name: DataTypes.STRING,
    surname: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });

  user.beforeCreate(function(user,option){
    return new Promise((res,rej)=>{
      console.log("llega");
      if(user.password){
        bcrypt.hash(user.password,10,function(error,hash){
          user.password_hashed = hash;
        })
      }
    });
  })
  return user;
};