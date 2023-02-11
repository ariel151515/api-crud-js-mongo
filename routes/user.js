const express = require("express");
const user = require("../models/user");
const userSchema = require('../models/user')

const router = express.Router();


// create user
router.post('/users', (req, res) => {
    const user = userSchema(req.body);
    user
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
})



// get all user
router.get('/users', (req, res) => {
    userSchema
        .find() // busca del emtodo userSchema
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));

})


// get user 
router.get('/users/:id', (req, res) => {
    const { id } = req.params
    userSchema
        .findById(id) // busca por el id dentro de  userSchema
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
})


// put user 
router.put('/users/:id', (req, res) => {
    const { id } = req.params
    const { name, age, email } = req.body;

    userSchema
        .updateOne({ _id: id }, { $set: { name, age, email } }) // busca por el id dentro de  userSchema
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
})


// delete user 
router.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    userSchema
        .remove({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
})


module.exports = router;
