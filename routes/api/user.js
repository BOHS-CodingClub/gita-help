import { Router } from 'express';
import User from '../../models/User.js';

const router = Router();

router.get('/', async (req, res, next) => {
    if (!req.query.username) {
        return res.status(400).json({
            error: 'Username query is undefined.'
        });
    }

    const user = await User.findOne({ username: req.query.username })
    .select({
        _id: 0,
        username: 1,
        points: 1,
    });

    if (!user) {
        return res.status(400).json({
            error: 'User not found.'
        });
    }

    return res.json(user);
});

export default router;