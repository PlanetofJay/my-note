import { useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'This is my first note!',
      date: '29/04/2023',
    },
    {
      id: nanoid(),
      text: 'This is my second note!',
      date: '12/03/2023',
    },
    {
      id: nanoid(),
      text: 'This is my third note!',
      date: '21/02/2023',
    },
  ]);

  return (
    <div className="container">
      <NotesList notes={notes} />
    </div>
  );
};

export default App;