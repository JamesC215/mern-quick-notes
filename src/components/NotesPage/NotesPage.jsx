import React, { useState, useEffect } from 'react';
import { getNotes, getAllNotes } from '../../utilities/notes-service';
import AddNoteForm from '../AddNotesForm/AddNotesForm';

export default function NotesPage({ user }) {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function getNotes() {
      const userNotes = await getAllNotes();
      setNotes(userNotes);
    }
    getNotes();
  }, []);

return (
<div>
    <AddNoteForm user={user} notes={notes} setNotes={setNotes} />
    <div>
    {notes.length === 0 ? (
        <p>No Notes Yet!</p>
    ) : (
        notes.map(note => (
        <div key={note._id}>
            <p>{note.text}</p>
            <p>{new Date(note.createdAt).toLocaleString()}</p>
            <hr />
        </div>
        ))
    )}
    </div>
</div>
);
}