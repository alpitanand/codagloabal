const express = require('express')
const bodyparser = require('body-parser')
const app = express()
require('../DataBase/db.config')

var port = process.env.PORT || 3000
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())

require('../routes/song.route')(app)

app.get('/',(req,res)=>{
    res.json("Hey testing")
})

app.listen(port,()=>{
    console.log("Server is up baby")
})