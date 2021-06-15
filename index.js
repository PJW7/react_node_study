//express 모듈 가져옴
const express = require('express');
const app = express();
const port = 5000;

const bodyParser = require('body-parser');
const User = require("./models/User");

//application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));

//application/json
app.use(express.json());


const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://pjw:1234@boilerplate.5illy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('mongoDB Connected...'))
  .catch(err => console.log(err));//error 안뜨게

app.get('/', (req, res) => res.send('Hello, World!'));

app.post('/register',(req, res) => {
  //회원가입할 때 필요한 정보들을 클라이언트에서 가져오면 그것들을 데이터베이스에 넣어준다.
  const user = new User(req.body);
  user.save((err, userInfo) => {
    if(err) return res.json({success: false, err});
     return res.status(200).json({
      success: true
    });
  });//save END
});//post END

app.listen(port, () => console.log(`Example app listening on port ${port}!`));