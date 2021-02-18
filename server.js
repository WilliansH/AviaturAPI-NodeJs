const express = require('express');
const hotelesRoutes = require('./router/hotelesRoutes.js');  
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/hoteles',hotelesRoutes);


app.get('/', function(req, res){
    res.status(200).send("Server On");
});

app.listen(3000, function(){ console.log("Server on, http://localhost:3000");});

module.exports = {
    app
};