# Habit Tracker

A simple habit tracker application built with React and Node.js. This application allows users to create, view, and manage their habits.

## Features

- Add new habits with a name and optional description.
- View a list of all habits.
- Delete habits.
- Track progress for each habit.

## Technologies Used

- **Frontend**: React
- **Backend**: Node.js, Express
- **Database**: MongoDB (using Mongoose)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Habit Tracker
   ```

2. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```

3. Set up your environment variables in a `.env` file:
   ```
   MONGO_URI=<your-mongodb-uri>
   PORT=5000
   ```

4. Start the backend server:
   ```bash
   node server.js
   ```

5. Install frontend dependencies:
   ```bash
   cd ../frontend
   npm install
   ```

6. Start the React application:
   ```bash
   npm start
   ```

## Usage

- Access the application in your browser at `http://localhost:3000`.
- Use the form to add new habits and manage your habit list.

## License

This project is licensed under the MIT License.
