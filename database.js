const mongoose = require('mongoose')
 
 

const reportdetails = new  mongoose.Schema({
     userID:String,
    marketId: String,
    marketName: String,
    cmdtyId:String,
    marketType:String,
    cmdtyName: String,
    priceUnit: String,
    convFcte: Number,
    price: Number
});
const Mandi = mongoose.model("Mandi",reportdetails);
module.exports = Mandi; 