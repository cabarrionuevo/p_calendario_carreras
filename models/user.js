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
      
      user.belongsToMany(models.Race,{
        through:'UserRace',
        as: 'races'
      })

    }
  }
  user.init({
    email: {
      type:DataTypes.STRING,
      unique:true,
      allowNull:false
    },
    password_hash: DataTypes.STRING, /*hashed password*/
    password:DataTypes.VIRTUAL,
    name: DataTypes.STRING,
    surname: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });

  user.login = function(email,password){
    console.log("hola",email,password);
    return user.findOne({
      where: {
        //empleo de short hand property
        email
      }
    }).then(user=>{      
      if(!user) return null;      
      return user.authenticatePassword(password).then(valid => {        
        if(valid){          
          return user;
        }else{          
          return null;
        }
      });
    });
  }

  user.beforeCreate(function(user,option){
    return new Promise((res,rej)=>{
      console.log("llega");
      if(user.password){
        bcrypt.hash(user.password,10,function(error,hash){
          user.password_hash = hash;
          res();
        })
      }
    });
  });

  user.prototype.authenticatePassword = function(password){

    return new Promise((res,rej)=>{
      bcrypt.compare(password,this.password_hash,function(err,valid){
        if(err) return rej(err);
        res(valid);
      })
    })

  }
  
  return user;
};