import { addNote, getUserNotes } from "./notes-api";

export async function createNote(noteData) {
    try {
        const note = await addNote(noteData);
        return note;
    } catch (err) {
        throw err;
    }
}

export async function getAllNotes() {
    try {
        const notes = await getUserNotes();
        return notes;
    } catch (err) {
        throw err;
    }
}
