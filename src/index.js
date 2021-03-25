require('dotenv').config()
const express = require('express');
const app = express();

const cors = require('cors');
const { routes: userRoutes } = require('./user/routes')
const { routes: authRoutes } = require('./auth/routes')

app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/api/user", userRoutes);

app.listen(3000);

module.exports = app;
