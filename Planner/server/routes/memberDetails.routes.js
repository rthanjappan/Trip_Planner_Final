import express from 'express';
//import { getDetails } from '../controllers/tripdetails.controllers.js';
import { getMemberDetails } from '../controllers/memberDetails.controllers.js';

const router = express.Router();

router.get('/', getMemberDetails);

export default router;