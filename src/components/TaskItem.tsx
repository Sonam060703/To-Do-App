// src/components/TaskItem.tsx
import React from 'react';
import { Task } from '../types/Task';

interface TaskItemProps {
  task: Task;
  toggleCompleted: (id: string) => void;
  deleteTask: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, toggleCompleted, deleteTask }) => {
  return (
    <li className="flex items-center justify-between p-3 mb-2 border rounded-md transition-colors dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleCompleted(task.id)}
          className="w-5 h-5 accent-blue-500 cursor-pointer"
          aria-label={`Mark "${task.name}" as ${task.completed ? 'incomplete' : 'complete'}`}
        />
        <span 
          className={`${
            task.completed 
              ? 'line-through text-gray-500 dark:text-gray-400' 
              : 'text-gray-800 dark:text-gray-200'
          }`}
        >
          {task.name}
        </span>
      </div>
      <button
        onClick={() => deleteTask(task.id)}
        className="btn btn-danger"
        aria-label={`Delete task: ${task.name}`}
      >
        Delete
      </button>
    </li>
  );
};

export default TaskItem;