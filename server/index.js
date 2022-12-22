
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import threadRoutes from './routes/threads.js';


// const express  = require('express');
// const bodyParser  = require('body-parser');
// const cors  = require('cors');
// const threadRoutes = require('./routes/threads.js');

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/threads', threadRoutes);

app.listen(5000, () => {
  console.log('Server listening on port 5000');
});

export default app;