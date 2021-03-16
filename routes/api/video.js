import { Router } from 'express';
import Video from '../../models/Video.js';

const router = Router();

router.get('/all', async(req, res, next) => {
    return res.json(Video);
});

router.get('/:videoId', async(req, res, next) => {
    const videoId = req.params.videoId;

    const foundVideo = Video.find((video) => video.id === videoId);

    if (!foundVideo) {
        return res.status(404).json({
            error: 'Video not found.'
        })
    }

    return res.json(foundVideo);
});

export default router;

