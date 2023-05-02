import express from 'express';
import { getDetails } from '../controllers/tripdetails.controllers.js';

const router = express.Router();

router.get('/', getDetails);

export default router;