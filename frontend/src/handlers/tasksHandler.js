import axios from 'axios';

export const accessAllTasks = async (username) => {
  const allTasks = await axios.get(
    `https://mern-task-management-app-rvvg.onrender.com/api/v1/tasks/${username}`
  );
  return allTasks.data;
};

export const createTask = async (data) => {
  return await axios.post(
    'https://mern-task-management-app-rvvg.onrender.com/api/v1/tasks/',
    data
  );
};

export const getTask = async (id) => {
  return await axios.get(
    `https://mern-task-management-app-rvvg.onrender.com/api/v1/tasks/${id}`
  );
};

export const updateTask = async (id, data) => {
  const allTasks = await axios.patch(
    `https://mern-task-management-app-rvvg.onrender.com/api/v1/tasks/${id}`,
    data
  );
  return allTasks.data;
};

export const deleteTask = async (id) => {
  return await axios.delete(
    `https://mern-task-management-app-rvvg.onrender.com/api/v1/tasks/${id}`
  );
};
