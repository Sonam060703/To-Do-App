// src/components/TaskList.tsx
import React from 'react';
import { Task } from '../types/Task';
import TaskItem from './TaskItem';

interface TaskListProps {
  tasks: Task[];
  toggleCompleted: (id: string) => void;
  deleteTask: (id: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, toggleCompleted, deleteTask }) => {
  if (tasks.length === 0) {
    return (
      <div className="text-center p-4 text-gray-500 dark:text-gray-400">
        No tasks yet. Add a task to get started!
      </div>
    );
  }

  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleCompleted={toggleCompleted}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;