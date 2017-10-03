const express = require('express');
const Sequelize = require('sequelize');
const sequelize = new Sequelize;
const expressHandlebars = require('express-handlebars');
const bodyParser = require('body-parser');

const app = express();

app.engine('handlebars', handlebars({defaultLayout: 'main', partialsDir: __dirname + '/views/partials/'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

sequelize.sync().then(() => {




}


app.listen(3000, function(){
	console.log("Listening on Port 3000");
});