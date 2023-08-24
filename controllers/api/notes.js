const Note = require('../../models/note');

module.exports = {
  createNote,
  getAllNotesForUser,
};

async function getAllNotesForUser(req, res) {
  try {
    const notes = await Note.find({ user: req.user._id });
    res.status(200).json(notes);
  } catch (err) {
    res.status(500).json({ error: `Failed to fetch notes: ${err.message}` });
  }
}
async function createNote(req, res) {
  const { text } = req.body;
  const user = req.user._id; 

  try {
      const note = new Note({ text, user });
      await note.save();
      res.status(201).json(note);
  } catch (err) {
      res.status(500).json({ error: 'Failed to create note' });
  }
};

