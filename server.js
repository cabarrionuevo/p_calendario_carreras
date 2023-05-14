const express = require('express');
const postgrees = require('pg');
const bodyParser = require('body-parser');
const sequelize = require('sequelize');

const app = express();

const ownerRoutes = require('./routes/owner_routes');
const userRoutes = require('./routes/user_routes');

app.use(bodyParser.urlencoded({extended: true}));
// app.use(methodOverride('_method'));


app.set('view engine','pug');

app.use(ownerRoutes);
app.use(userRoutes);

app.get('/',function(req,res){
    res.send("Calendario de carreras 2023");
})

app.listen(3000);
