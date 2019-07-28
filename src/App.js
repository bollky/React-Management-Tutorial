import React,{Component} from 'react';
import Customer from './components/Customer'
import './App.css';

const customers = [
  {
    'id':1,
    'image':'https://placeimg.com/64/64/1',
    'name': '천정오',
    'birthday': '740215',
    'gender': '남자',
    'job':'직장인'
  },
  {
    'id':2,
    'image':'https://placeimg.com/64/64/2',
    'name': '홍길동',
    'birthday': '731205',
    'gender': '남자',
    'job':'실업자'
  },
  {
    'id':3,
    'image':'https://placeimg.com/64/64/3',
    'name': '고문관',
    'birthday': '750111',
    'gender': '남자',
    'job':'교수'
  }
]
class App extends Component {
  render(){
    return( 
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
            );
          })
        }
      </div>      
    );
  }
}


export default App;
