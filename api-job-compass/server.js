import express from 'express';
const app = express();
const PORT = process.env.PORT || 8000;
import dotenv from 'dotenv';

// Setup middlewares
import morgan from 'morgan';
import cors from 'cors';
app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());

// DB connection
import { dbConnection } from './src/config/db.js';
dbConnection();

// Middlewares
import { userAuth } from './src/middleware/authMiddleware.js';

// APIs
import userRouter from './src/routers/userRouter.js';
app.use('/api/v1/users', userRouter);

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 NOT FOUND</h1>');
});
app.listen(PORT, (error) => {
    error && console.log(error);
    console.log(`Server is running at ${PORT}`);
});

//open ai server.js

import bodyParser from 'body-parser';
dotenv.config();

const apiKey = process.env.API_KEY;
import { Configuration, OpenAIApi } from 'openai';

const config = new Configuration({
    apiKey,
});

const openai = new OpenAIApi(config);

app.use(bodyParser.json());
app.use(cors());

app.post('/chat', async (req, res) => {
    const { prompt } = req.body;

    const completion = await openai.createCompletion({
        model: 'text-davinci-003',
        max_tokens: 512,
        temperature: 0,
        prompt: prompt,
    });
    res.send(completion.data.choices[0].text);
});
