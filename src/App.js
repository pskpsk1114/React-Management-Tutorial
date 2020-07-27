import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customers = [
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
},

]

class App extends Component{
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            )
          })
        }
      </div>
    );  
  }
}

export default App;