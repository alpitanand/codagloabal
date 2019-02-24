const mongoose = require('mongoose')

mongoose.Promise = global.Promise;

const url  = 'mongodb://alpit_anand:DBADBADBA1@ds349045.mlab.com:49045/spotify'


//const url = 'mongodb://localhost:27017/Spotify'

mongoose.connect(url, {
    useNewUrlParser: true
}).then(()=>{
    console.log("Connection sucessfull");
})
.catch((err)=>{
    console.log("error")
})

