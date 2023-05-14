const { json } = require('body-parser');
const User = require('../models').User;

module.exports = {

    new: function(req,res){
        res.render('users/new');
    },
    create: function(req,res){
        let data = {
            email: req.body.email,
            password: req.body.pass,            
            name:req.body.name,
            surname:req.body.surname            
        }
        console.log(data);

        User.create(data).then(result =>{
            console.log("llega");
            res.json(result);
        }).catch(err=>{
            res.json(err);
        })
    },



}