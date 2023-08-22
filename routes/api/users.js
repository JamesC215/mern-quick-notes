const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// All paths start with '/api/users'

// POST /api/users (create a user - signup)
router.post('/', usersCtrl.create);
router.post('/login', usersCtrl.login);
// Get /api/users/check-token
router.get('/check-token', usersCtrl.checkToken);

module.exports = router;