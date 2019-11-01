import express from 'express';
import httpProxy from 'express-http-proxy';

import cookieParser from 'cookie-parser';
import logger from 'morgan';
import helmet from 'helmet';

import {USERS_API_URL, MOVIES_API_URL} from './URLs'

const port = 3000;

const app = express();

const userServiceProxy = httpProxy(USERS_API_URL);
const moviesServiceProxy = httpProxy(MOVIES_API_URL);

app.use(logger('dev'));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Proxy request
app.all('/users', userServiceProxy);

app.all('/movies', moviesServiceProxy);

app.get('/', (req, res) => res.send("API Gateway!"));

app.listen(port, () => console.log(`API Gateway listening on port ${port}!`));
