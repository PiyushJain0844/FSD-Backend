import { useState } from "react";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");

  const notes = [
    {
      name: "FSD",
      file: "/files/fsd.pdf",
    },
    {
      name: "React",
      file: "/files/react.pdf",
    },
    {
      name: "JavaScript",
      file: "/files/javascript.pdf",
    },
  ];

  const filteredNotes = notes.filter((note) =>
    note.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Notes Portal App</h1>

      <div className="search-box">
        <span>🔍</span>
        <input
          type="text"
          placeholder="Search notes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="notes-container">
        {filteredNotes.map((note) => (
          <div className="note-item" key={note.name}>
            <h2>{note.name}</h2>

            <a href={note.file} download>
              <button>Download</button>
            </a>
          </div>
        ))}

        {filteredNotes.length === 0 && (
          <p className="no-result">No notes found</p>
        )}
      </div>
    </div>
  );
}

export default App;