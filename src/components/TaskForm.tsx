// src/components/TaskForm.tsx
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Task } from '../types/Task';

interface TaskFormProps {
  addTask: (task: Task) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskName.trim() !== '') {
      const newTask: Task = {
        id: uuidv4(),
        name: taskName.trim(),
        completed: false,
      };
      addTask(newTask);
      setTaskName('');
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="mb-6"
    >
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Add a new task..."
          className="flex-grow p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          aria-label="Task name"
        />
        <button 
          type="submit" 
          className="btn btn-primary"
          aria-label="Add task"
        >
          Add Task
        </button>
      </div>
    </form>
  );
};

export default TaskForm;