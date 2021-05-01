const express = require('express');
const router = express.Router();

// requiring in our userController
const usersController = require('../controllers/users.js');

// Hands GET requests to our /users route. Check console for Data
router.get('/', usersController.getUsers);

//router.get('/:id', usersController.getUser);

//GETS users/profile
// router.get('/profile', usersController.profile); //don't need add users/bc express already knows


module.exports = router;
