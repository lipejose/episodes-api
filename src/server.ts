import express from 'express';

import "./database"
import { routes } from './routes'

const app = express();

const port = process.env.PORT || 8080;

app.use(express.json());

app.use(routes);

app.listen(port, () => console.log('server is running'))