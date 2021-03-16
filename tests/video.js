import Video from '../models/Video.js';
import { strictEqual } from 'assert';

const video = Video.find((video) => video.title === 'Lecture 1');
strictEqual(video.id, 'lecture-1');
