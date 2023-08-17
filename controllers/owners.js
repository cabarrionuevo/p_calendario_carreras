const { json } = require('body-parser');
const { Op } = require('sequelize');
const Owner = require('../models').Owner;

module.exports = {
    index: function(req,res){
        Owner.findAll().then((owners)=>{
            console.log("La cantidad de owners es: ",owners.length);
            res.render('owners/index',{owners});
        })
    },
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
    },
    search: function(req,res){
        res.render('owners/search');
    },
    find: function(req,res){

        let nombre = req.body.nombre;

        Owner.findOne({where: {nombre: {[Op.like]: `%${nombre}%`}}}).then((owner)=>{            
                        
            if(owner){
                res.render('owners/edit',{owner});
            }else{
                let errorMsg = "organizador no encontrado";                
                res.render('owners/edit',{errorMsg});
            }});                            
    },
    update: function(req,res){
        
        let owner = {
            id: req.body.id,
            nombre:req.body.description, 
            website: req.body.website,
        }

        Owner.update({nombre: data.nombre,website: data.website},{
            where: {
                id: data.id,
            }
        }).then(function(response){
            
            owner.response = response;
            
            res.redirect('/owners/edit',{owner});
        })    
    }   

}