// API modules are where the code lives to communicate
// with the server via AJAX
import sendRequest from './send-request';
const BASE_URL = '/api/notes';

export function addNote(noteData) {
  return sendRequest(BASE_URL, 'POST', noteData);
}

export function getUserNotes() {
  return sendRequest(BASE_URL);
}
