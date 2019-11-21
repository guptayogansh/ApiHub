let express = require("express")
let app = express()
var port = process.env.port || 8081
app.get('/', (req,res) => res.send("Hey! I am the Server for ApiHub and I\'m built using Express!!"))
app.listen(port, function(){
    console.log("Running ApiHub on port: " + port)
})