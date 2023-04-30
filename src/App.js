import { useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import SearchNote from './components/SearchNote';

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

  // SEARCH NOTE
  const [searchText, setSearchText] = useState('');

  // ADD NOTE
  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  // DELETE NOTE
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className="container">
      <SearchNote handleSearchNote={setSearchText}/>
      <NotesList 
        notes={notes.filter((note) => 
          note.text.toLowerCase().includes(searchText)
        )} 
        handleAddNote={addNote} 
        handleDeleteNote={deleteNote}
      />
    </div>
  );
};

export default App;