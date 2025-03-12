import React from 'react';
import axios from 'axios';

const HabitItem = ({ habit }) => {
  const handleDelete = async () => {
    await axios.delete(`http://localhost:5000/api/habits/${habit._id}`);
    window.location.reload(); // Reload to refresh the habit list
  };

  return (
    <li>
      <h3>{habit.name}</h3>
      <p>{habit.description}</p>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default HabitItem;
