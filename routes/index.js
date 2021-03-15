import { Router } from 'express';
import api from './api/index.js';

const router = Router();

router.use('/api', api);

router.get('/', function(req, res, next) {
    res.json({ 'hello': 'world' });
});

export default router;