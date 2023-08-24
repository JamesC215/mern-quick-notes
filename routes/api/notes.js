const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');

// Create a note
router.post('/', notesCtrl.createNote);
// Get Notes
router.get('/', notesCtrl.getAllNotesForUser);


module.exports = router;