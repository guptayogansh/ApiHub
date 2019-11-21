let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let app = express();

let apiRoutes = require("./api-routes");

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/Apihub', { useNewUrlParser: true});

var db = mongoose.connection;
if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")

var port = process.env.PORT || 8081;
app.get('/', (req, res) => res.send('Hey! I am creating the server for my project using Express!! Just installed nodemon for ease!!'));
app.use('/api', apiRoutes);
app.listen(port, () => {
    console.log("Running RestHub on port " + port);
});

