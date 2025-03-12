import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HabitItem from './HabitItem';

const HabitList = () => {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    const fetchHabits = async () => {
      const response = await axios.get('http://localhost:5000/api/habits');
      setHabits(response.data);
    };
    fetchHabits();
  }, []);

  return (
    <div>
      <h2>Habit List</h2>
      <ul>
        {habits.map(habit => (
          <HabitItem key={habit._id} habit={habit} />
        ))}
      </ul>
    </div>
  );
};

export default HabitList;
