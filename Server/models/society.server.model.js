var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var societySchema = new Schema({
    SocietyName: String,
    City:String,
    PinCode:Number,
    Address1:String,
    Address2:String,
    State:String,
    Country:String,
    Description:String,
    CreatedOn:{ type:Date, default:Date.now }
});

module.exports = mongoose.model('Society',societySchema);