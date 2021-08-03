const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Mandi = require('./modules/database');
mongoose.connect('mongodb://localhost:27017/material',{useNewUrlParser: true,useCreateIndex: true
,useUnifiedTopology: true })
const db = mongoose.connection;
db.on('error',console.error.bind(console,"connection error:"));
db.once("open",()=>{
    console.log("database connected");
});
app.use(express.urlencoded({extended:true}))

app.post('/reports',async (req , res )=>{
    try{
//  console.log(req.body) ;
const mandi = new Mandi(req.body)
     await mandi.save();
    res.send("done")
    }
catch(e) {
     console.log(e)
}
})

 app. get('/reports/:id', async (req, res)=>{
    try{ const {id} = req.params;
     const found  = await Mandi.findById(id)
    console.log(found)
    res.send(found)
 }
 catch(e){
     console.log(e)
 }
    }) 


app.listen(3000,()=> {
    console.log('server started')
}) 