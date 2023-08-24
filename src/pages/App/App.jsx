import './App.css';
import { useState } from 'react';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import NotesPage from '../../components/NotesPage/NotesPage';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main>
      { user ? 
      <>
        <h1>Add a new note below:</h1>
        <NavBar user={user.name} setUser={setUser} />
        <NotesPage user={user} />
      </>
      : 
      <AuthPage setUser={setUser} /> }
    </main>
  );
}


