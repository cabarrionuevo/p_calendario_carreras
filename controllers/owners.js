const { json } = require('body-parser');
const Owner = require('../models').Owner;

module.exports = {  
    new: function(req,res){
        console.log("entra");
        res.render('owners/new');
    },
    create: function(req,res){
        let data = {
            nombre: req.body.nombre,
            website: req.body.website
        }

        Owner.create(data).then(result =>{
            //Si sale ok mostramos un json
            res.json(result);
        }).catch(err =>{
            //Si hay error lo mostramos
            res.json(err);
        });
    }
}