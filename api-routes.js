// ALL api endpoints will be defined in this file with the help of routers

let router = require("express").Router()

router.get('/', (req, res) =>{
   res.json({
       status: "API is working!",
       message: "Welcome to ApiHub"
   })
} )

// Import contact controller
var contactController = require('./ContactsApi/contactController');
// Contact routes
router.route('/contacts')
    .get(contactController.index)
    .post(contactController.new);
router.route('/contacts/:contact_id')
    .get(contactController.view)
    .patch(contactController.update)
    .put(contactController.update)
    .delete(contactController.delete);

module.exports = router