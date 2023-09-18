const { json } = require('body-parser');
const { Op } = require('sequelize');
const Owner = require('../models').Owner;
const { basename } = require('path');

module.exports = {
    index: function (req, res) {
        Owner.findAll().then((owners) => {
            console.log("La cantidad de owners es: ", owners.length);
            res.render('owners/index', { owners });
        })
    },
    new: function (req, res) {        
        res.render('owners/new');
    },
    create: function (req, res) {                
        
        let filename = 'default-avatar.jpg';
        
        console.log(req.file);

        if (req.file) filename = basename(req.file.path);
    
        let data = {
            nombre: req.body.nombre,
            website: req.body.website, 
            imagePath: filename           
        }        

        Owner.create(data).then(result => {
            //Si sale ok mostramos un json
            res.json(result);
        }).catch(err => {
            //Si hay error lo mostramos
            res.json(err);
        });
    },
    search: function (req, res) {
        res.render('owners/search');
    },
    update: function (req, res) {
                       
        console.log("id owner: ",req.params.id);

        const own = Owner.findByPk(req.params.id).then(
            (owner) =>{                
                owner.nombre = req.body.nombre;
                owner.website = req.body.website;                
                owner.save().then(()=>{
                    owner.updateStatus = true;
                    res.render('owners/edit', {owner});
                })
            }
        )                
    },
    destroy: function(req,res){        
        Owner.destroy({
            where:{
                id:req.params.id
            }
        }).then((result)=>{
            res.send('Owner eliminado correctamente');
        })
    },
    show: function (req, res) {

        let nombre = req.body.nombre;

        console.log("Nombre: ",nombre);

        Owner.findOne({ where: { nombre: { [Op.like]: `%${nombre}%` } } }).then((owner) => {
                
            if (owner) {                
                res.render('owners/edit', {owner});
            } else {
                res.render('owners/search');
            }
        });    
    },
   

}