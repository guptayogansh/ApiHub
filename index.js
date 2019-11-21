let express = require("express")
let bodyParser = require("body-parser")
let mongoose = require("mongoose")
let apiRoutes = require("./api-routes")

let app = express()
//configuring body parser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
 }));
app.use(bodyParser.json());

//connect to mongoose
let db = mongoose.connection;
if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")

let port = process.env.port || 8081
app.use('/api', apiRoutes)
app.get('/', (req,res) => res.send("Hey! I am the Server for ApiHub and I\'m built using Express!! Just installed nodemon for ease!"))
app.listen(port, ()=>{
    console.log("Running ApiHub on port: " + port)
})