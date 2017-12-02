const express = require('express');
const app = express();
const consign = require('consign');

consign()
    .include('./models')
    .then('./libs/middlewares.js')
    .then('./routes')
    .then('./libs/boot.js')
    .into(app);



