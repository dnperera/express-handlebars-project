const express = require('express');
const Sequelize = require('sequelize');
const sequelize = new Sequelize;
const expressHandlebars = require('express-handlebars');
const bodyParser = require(body-parser);

const app = express();

app.use(express.static('public'))







app.listen(3000, function(){
	console.log("Listening on Port 3000");
});