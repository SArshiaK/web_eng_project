const express = require('express');
const {sequelize} = require('./src/models');
const cors = require('cors');

const apiRouter = require('./src/routes');
const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/v1', apiRouter)
// app.use('/api/v1', apiRouter);

sequelize.sync()
    .then(() => console.log('Connected to database'))
    .catch((err) => console.log('Database connection failed', err))

app.listen(PORT, console.log(`Listening on port 8000`));