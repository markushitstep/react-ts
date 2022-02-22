import React from 'react';
import { Card, CardVariant } from './components/card';
import UserList  from './components/UserList';
import { IUser } from './types/types';

const App = () => {
  const users: IUser[] = [
    {id: 1, name: "Max", email: "Maximus@gmail.com", address: {city: "Zp", street: "Reliefnaya", zipcode: "06213"}},
    {id: 1, name: "Leo", email: "Testing@gmail.com", address: {city: "UK", street: "Lenina", zipcode: "02313"}}
  ] 

  return (
    <div>
        <Card onClick={(num) => console.log('click', num) } variant={CardVariant.primary} width='200px' height='200px'>
            <button>Button</button>
        </Card>
        <UserList users={users}/>
    </div>
  )
}

export default App;
