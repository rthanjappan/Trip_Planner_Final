import express from 'express';
import { createTask, getTask, updateTask, deleteTask } from '../controllers/task.controller.js';

const router = express.Router();

router.get('/', getTask);
router.post('/', createTask);
router.patch('/:id', updateTask);
router.delete('/:id', deleteTask);

export default router;