import express from 'express';
import { signin, signup ,saveMembers,saveTripDetails,getGroupMembers} from '../controllers/users.controllers.js';

const router = express.Router();

router.post('/signin', signin);
router.post('/signup', signup);
//router.post('/roseaccessing', roseaccessing);
router.post('/saveMembers', saveMembers);
router.post('/saveTripDetails', saveTripDetails);
router.post('/getGroupMembers', getGroupMembers);


export default router;