require('dotenv').config();
const multer = require('multer');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const File = require('./models/File');

const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }))


app.listen(process.env.PORT);
