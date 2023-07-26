// components/DiaryForm.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEntry } from '../features/diarySlice';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker'; // Update the import statement here
import './DiaryForm.css'; 

const DiaryForm: React.FC = () => {
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [content, setContent] = useState('');

  const handleAddEntry = () => {
    setShowForm(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addEntry({ id: Date.now(), date: selectedDate?.toDateString() || '', content }));
    setSelectedDate(null);
    setContent('');
    setShowForm(false); // Hide the form after submitting
  };

  return (
    <div className="diary-form-container">
      {!showForm && (
        <button className="create-new-button" onClick={handleAddEntry}>
          Create New
        </button>
      )}
      {showForm && (
        <form onSubmit={handleSubmit} className="input-form">
          <DatePicker
            selected={selectedDate}
            onChange={(date: Date | null) => setSelectedDate(date)}
            dateFormat="dd/MM/yyyy"
            placeholderText="Date"
            className="input-field"
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your diary entry..."
            className="input-field"
          />
          <button type="submit" className="submit-button">
            Add Entry
          </button>
        </form>
      )}
    </div>
  );
};

export default DiaryForm;
