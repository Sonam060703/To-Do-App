// src/components/TodoApp.tsx
import React, { useState, useEffect } from 'react';
import { Task } from '../types/Task';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import ThemeToggle from './ThemeToggle';

const TodoApp: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  const toggleCompleted = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Calculate task statistics
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
              Todo App
            </h1>
            <ThemeToggle />
          </div>

          <TaskForm addTask={addTask} />

          {totalTasks > 0 && (
            <div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
              {completedTasks} of {totalTasks} tasks completed
            </div>
          )}

          <TaskList 
            tasks={tasks} 
            toggleCompleted={toggleCompleted} 
            deleteTask={deleteTask} 
          />
        </div>
      </div>
    </div>
  );
};

export default TodoApp;