// components/DiaryList.tsx
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import './DiaryForm.css';

const DiaryList: React.FC = () => {
  const entries = useSelector((state: RootState) => state.diary.entries);
  const [editingEntry, setEditingEntry] = useState<number | null>(null);

  const handleEditEntry = (entryId: number) => {
    setEditingEntry(entryId);
  };

  const handleCancelEdit = () => {
    setEditingEntry(null);
  };

  return (
    <div className="diary-entries-container">
      <h2>Diary Entries:</h2>
      {entries.map((entry) => (
        <div className="diary-entry" key={entry.id}>
          {editingEntry === entry.id ? (
            // If in edit mode, show input fields
            <>
              <input type="text" value={entry.date} onChange={(e) => console.log(e.target.value)} />
              <textarea value={entry.content} onChange={(e) => console.log(e.target.value)} />
              <button onClick={handleCancelEdit}>Cancel</button>
              <button>Save</button>
            </>
          ) : (
            // If not in edit mode, show the entry text
            <>
              <strong>{entry.date}</strong>
              <p>{entry.content}</p>
              <button onClick={() => handleEditEntry(entry.id)}>Edit</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default DiaryList;
