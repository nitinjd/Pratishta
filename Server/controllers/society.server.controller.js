
var Society = require('../models/society.server.model');

exports.create  = function(req, res){   
    var entry = new Society({
            SocietyName: req.body.SocietyName,
            City: req.body.City,
            PinCode: req.body.PinCode,
            Address1: req.body.Address1,
            Address2: req.body.Address2,
            State: req.body.State,
            Country: req.body.Country,
            Description: req.body.Description,
    });

    entry.save();

    res.redirect(301,'/');
};

exports.getSociety=function(req,res){
  //  res.render('newsociety',{SocietyName:'simla'});
  var query = Society.find();
  query.sort({ CreatedOn:'desc' })
        .exec(function(err,results){
              // res.render('index',{title:'Society List',Society:results })
              return res.json(results);
        });
};