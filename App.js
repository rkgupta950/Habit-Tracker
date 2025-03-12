import React from 'react';
import HabitList from './HabitList';
import AddHabit from './AddHabit';

function App() {
  return (
    <div>
      <h1>Habit Tracker</h1>
      <AddHabit />
      <HabitList />
    </div>
  );
}

export default App;
