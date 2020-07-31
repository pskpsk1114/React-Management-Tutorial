const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers',(req, res) => {
    res.send([
        {
            'id' : 1,
            'image' : 'https://placeimg.com/64/64/1',
            'name' : '박상규',
            'birthday' : '971114',
            'gender' : 'male',
            'job' : '프로그래머'
          },
          {
            'id' : 2,
            'image' : 'https://placeimg.com/64/64/2',
            'name' : '지강민',
            'birthday' : '971126',
            'gender' : 'male',
            'job' : '건축'
          },
          {
            'id' : 3,
            'image' : 'https://placeimg.com/64/64/3',
            'name' : '이왕로',
            'birthday' : '980113',
            'gender' : 'male',
            'job' : '토목'
          }
    ])
});

app.listen(port, () => console.log(`Listening on port ${port}`));
