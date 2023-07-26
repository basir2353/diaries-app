// App.tsx
import React from 'react';
import './App.css';
import DiaryForm from './components/DiaryForm';
import DiaryList from './components/DiaryList';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Diaries App</h1>
      <DiaryForm />
      <DiaryList />
    </div>
  );
};

export default App;
