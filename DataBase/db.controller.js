var Song = require('./db.model')

exports.findTop = (req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    const setLimit = Number(req.params.number) 
    if(setLimit==null|| setLimit == undefined || isNaN(setLimit)){
       return res.status(500).json("Send a valid input")
    }
    if(setLimit ==0){
        return res.status(500).json("Enter value greater than 1")
    }
    else(
    Song.find({})
        .limit(setLimit)
        .then((data)=>{
           // console.log(data)
            return res.send(data)
        }).catch((err)=>{
            return res.send(err)
        })
    )
}

exports.findData = (req, res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    const searchParam = req.params.textValue;
    let storeResult = []
    if(searchParam==null|| searchParam == undefined || searchParam==""){
        Song.find({}).lean()
        .then((data)=>{
            storeResult.push(...data);
        }).catch((err)=>{
            console.log("here is error");
        })
     }

  else{

    Song.find({artists: new RegExp(searchParam, "i")}).lean()
    .then((data)=>{
        storeResult.push(...data);
    })
    .then(() => {
        Song.find({name: new RegExp(searchParam, "i")}).lean()
        .then((data)=>{
        
            storeResult.push(...data)
        })
        .then(() => {
            console.log(storeResult)
            res.send(storeResult)
        })  
    })
    .catch((err)=>{
        console.log("Here is error")
        console.log(err)
        res.send(err)
    })
    }
}
