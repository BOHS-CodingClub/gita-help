import express from 'express';
import routes from './routes/index.js';
import path from 'path';

const __dirname = path.resolve(path.dirname(''));

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', routes);

const server = app.listen(port, () => {
    console.log(`App listening at https://localhost:${port}`);
});