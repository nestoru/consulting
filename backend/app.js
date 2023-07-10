const express = require('express');
const mongoose = require('mongoose');
const app = express();
const tasksRouter = require('./modules/tasks/routes/tasks');
const swaggerSetup = require('./modules/tasks/swagger');

// Middleware
app.use(express.json());

// Routes
app.use('/tasks', tasksRouter);

