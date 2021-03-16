import { Router } from 'express';
import userApi from './user.js';
import videoApi from './video.js';

const router = Router();

router.use('/user', userApi);
router.use('/video', videoApi);

export default router;