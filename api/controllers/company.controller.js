const db = require("../models");
const Companies = db.companies;
const Op = db.Sequelize.Op;

// Create contact
exports.create = (req, res) => {
    const company = {
        company_name: req.body.name,
        company_address : req.body.address,
        contactId: parseInt(req.params.contactId)
    };
    
    Companies.create(company)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured"
            })
        });
};

// Get all companies
exports.findAll = (req, res) => {

    Companies.findAll({
        where: {
            contactId: parseInt(req.params.contactId)
        }
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred"
            });
        });
};

// Get one company by id
exports.findOne = (req, res) => {
    Companies.findOne({
        where: {
            contactId: req.params.contactId,
            company_id: req.params.companyId
        }
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred"
            });
        });
};

// Update company by id
exports.update = (req, res) => {
    const id = req.params.companyId;

    Companies.update(req.body, {
        where: {company_id: id, contactId: req.params.contactId}
    })
    .then(num => {
        if (num ==1){
            res.send({
                message: "Company was updated successfully."
            });
        } else {
            res.send({
                message: 'Cannot update Company'
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Company with id= " + id
        });
    });
};

// Delete one company by id
exports.delete = (req,res) => {
    const id = req.params.companyId;

    Companies.destroy({
        where: {company_id: id, contactId: req.params.contactId}
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Company was deleted successfully!"
            });
        } else {
            res.send({
                message: 'Cannot delete the Company'
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete Company with id= " + id
        });
    });
};
