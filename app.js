const express = require('express');

const bioRoutes = require('./routes/bioRoute');

const app = express();

app.use(express.json());

app.use('/api/bio', bioRoutes);

module.exports = app;
