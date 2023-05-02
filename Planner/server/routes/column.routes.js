import express from 'express';
import { createColumn, getColumn, updateColumn,deleteColumn } from '../controllers/column.controllers.js';

const router = express.Router();

router.get('/', getColumn);
router.post('/', createColumn);
router.patch('/:id', updateColumn);
router.delete('/:id', deleteColumn);

export default router;