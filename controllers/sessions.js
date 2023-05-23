const User = require('../models').user;

module.exports = {
    new: function (req, res) {
        res.render('sessions/new');
    },
    create: function (req, res) {

        User.login(req.body.email, req.body.password).then( user => 
            {                                
                if(user) {                    
                    req.session.userId = user.id;
                };                                
                res.json(user);
                })
            .catch(err=>{
                res.json(err);
            })
    },

}