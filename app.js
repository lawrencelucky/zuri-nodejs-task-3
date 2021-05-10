const express = require('express');

const bioRoutes = require('./routes/bioRoute');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send(`<h3>NodeJs Task 3</h3>`);
});

app.use('/api/bio', bioRoutes);

module.exports = app;
