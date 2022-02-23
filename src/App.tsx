import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { UsersPage } from './components/UsersPage';
import { TodosPage } from './components/TodosPage';
import { NavLink } from 'react-router-dom';
import { UserItemPage } from './components/UserItemPage';

const App = () => {

  return (
    <Router>
      <div>
          <NavLink to={"/users"}>Пользователи</NavLink>
          <NavLink to={"/todos"}>Список дел</NavLink>
        </div>
      <Routes>
        <Route path='/users' element={<UsersPage />}/>
        <Route path='/todos' element={<TodosPage />}/>
        <Route path='/user/:id' element={<UserItemPage />}/>
      </Routes>
    </Router>
  )
}

export default App;
