import parser from 'body-parser';
import http from 'http';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import 'express-async-errors';

import { handler } from './util/handler';
import { logger } from './structs/Logger';

import { router as userRouter } from '@/controllers/user';
import { router as docsRouter } from '@/controllers/docs';

import type { Express } from 'express';

dotenv.config();

const app: Express = express();

app.use(cors({ origin: [process.env.FRONTEND_URL!, 'http://localhost:3000'] }));
app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));

app.use('/user', userRouter);
app.use('/docs', docsRouter);
app.use(handler);

http.createServer(app).listen(process.env.HTTP_PORT, () => {
  logger.success(`started server on port: ${process.env.HTTP_PORT}\n`, { title: 'HTTP' });
});
