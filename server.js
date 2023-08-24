const express = require('express');
const postgrees = require('pg');
const bodyParser = require('body-parser');
const sequelize = require('sequelize');
const methodOverride = require('method-override'); //p/interpretación de verbos PUT/PATCH/DELETE
const session = require('express-session');

const app = express();

const ownerRoutes = require('./routes/owner_routes');
const userRoutes = require('./routes/user_routes');
const sessionRoutes = require('./routes/session_routes');

app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));



app.set('view engine','pug');

app.use(session({
    secret: ['"RD!Vu^@1hlW^Io',',JZd[-!6BEO(lzB)mCCLTlpFYoQh:P'],
    saveUninitialized: false,
    resave:false
}));

app.use(ownerRoutes);
app.use(userRoutes);
app.use(sessionRoutes);

app.get('/',function(req,res){
    res.render('index');
})

app.listen(3002);
