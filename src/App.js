import React, { Component } from 'react';
import Footer from './Footer';
import AddTodo from '../src/Containers/AddTodo';
import VisibleTodoList from '../src/Containers/VisibleTodoList'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App;
