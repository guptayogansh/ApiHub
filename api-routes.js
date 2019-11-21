// ALL api endpoints will be defined in this file with the help of routers

let router = require("express").Router()

router.get('/', (req, res) =>{
   res.json({
       status: "API is working!",
       message: "Welcome to ApiHub"
   })
} )

module.exports = router