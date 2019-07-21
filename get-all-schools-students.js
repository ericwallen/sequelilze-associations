var models = require('./models');
var express = require('express');

var app = express();

app.get('/',function(req,res){
	models.Schools.findAll({
		include: [models.Students]
	}).then(data => res.send(data))
})

app.listen(3000)