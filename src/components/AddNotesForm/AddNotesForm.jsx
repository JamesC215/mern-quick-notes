import { useState } from 'react';
import { createNote } from '../../utilities/notes-service';


export default function AddNoteForm({ user, notes, setNotes }) {
    const [noteText, setNoteText] = useState('');

    const handleSubmit = async (e) => {
      e.preventDefault();
      
      const newNote = {
          text: noteText,
          user: user._id
      };
      
      try {
          const addedNote = await createNote(newNote);
          setNotes([addedNote, ...notes]);
          setNoteText('');
      } catch (err) {
        console.log("Error submitting form:", err.message);
      }
    };

    return (
      <form onSubmit={handleSubmit}>
          <textarea 
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
              placeholder="Type a new note here"
          />
          <button type="submit">Add Note</button>
          <br />
      </form>
    );
}