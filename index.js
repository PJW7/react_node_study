//express 모듈 가져옴
const express = require('express');
const app = express();
const port = 5000;

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://pjw:1234@boilerplate.5illy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('mongoDB Connected...'))
  .catch(err => console.log(err));//error 안뜨게

app.get('/', (req, res) => res.send('Hello, World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));