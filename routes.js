const express = require('express');
const router = express.Router();
const Habit = require('../models/Habit');

// Get all habits
router.get('/', async (req, res) => {
  const habits = await Habit.find();
  res.json(habits);
});

// Add a new habit
router.post('/', async (req, res) => {
  const newHabit = new Habit(req.body);
  await newHabit.save();
  res.json(newHabit);
});

router.delete('/:id', async (req, res) => {
  await Habit.findByIdAndDelete(req.params.id);
  res.json({ message: 'Habit deleted successfully' });
});

// Update habit progress
router.put('/:id', async (req, res) => {

  const habit = await Habit.findById(req.params.id);
  habit.progress.push(new Date());
  await habit.save();
  res.json(habit);
});

module.exports = router;
