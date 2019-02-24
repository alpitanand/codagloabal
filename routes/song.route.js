module.exports=(app)=>{

    var controller = require('../DataBase/db.controller')
    
    app.get('/song/:number',controller.findTop)

    app.get('/search/:textValue', controller.findData)

}

