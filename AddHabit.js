import React, { useState } from 'react';
import axios from 'axios';

const AddHabit = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newHabit = { name, description };
    await axios.post('http://localhost:5000/api/habits', newHabit);
    window.location.reload(); // Reload to refresh the habit list
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Habit</h2>
      <input
        type="text"
        placeholder="Habit Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Habit</button>
    </form>
  );
};

export default AddHabit;
