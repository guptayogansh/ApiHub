//This controller will handle all the api requests.
//It defined the method that handles request and response from different API endpoints
// The following endpoint are implemented -
// GET /api/contacts : list all contacts
// POST /api/contacts : create new contact
// GET /api/contacts/{id} : retrieve a single contact
// PUT /api/contacts/{id} : update a single contact
// DELETE /api/contacts/{id} : delete a single contact


Contact = require('./contactModel');

exports.index = (req, res) => {
    Contact.get((err, contacts) => {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Contacts retrieved successfully",
            data: contacts
        });
    });
};

// Handle create contact actions
exports.new = (req, res) => {
    var contact = new Contact();
    contact.name = req.body.name ? req.body.name : contact.name;
    contact.gender = req.body.gender;
    contact.email = req.body.email;
    contact.phone = req.body.phone;

// save the contact and check for errors
    contact.save((err) => {
        // if (err)
        //     res.json(err);
res.json({
            message: 'New contact created!',
            data: contact
        });
    });
};

// Handle view contact info
exports.view = (req, res) => {
    Contact.findById(req.params.contact_id, function (err, contact) {
        if (err)
            res.send(err);
        res.json({
            message: 'Contact details loading..',
            data: contact
        });
    });
};

// Handle update contact info
exports.update = (req, res) => {
Contact.findById(req.params.contact_id, function (err, contact) {
        if (err)
            res.send(err);
contact.name = req.body.name ? req.body.name : contact.name;
        contact.gender = req.body.gender;
        contact.email = req.body.email;
        contact.phone = req.body.phone;

// save the contact and check for errors
        contact.save((err) => {
            if (err)
                res.json(err);
            res.json({
                message: 'Contact Info updated',
                data: contact
            });
        });
    });
};


// Handle delete contact
exports.delete = (req, res) => {
    Contact.remove({
        _id: req.params.contact_id
    }, (err, contact) => {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'Contact deleted'
        });
    });
};
