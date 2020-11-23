import React from 'react';
import './App.css';
import CategoriesContainer from './Containers/CategoriesContainer';
import TasksContainer from './Containers/TaskContainer';
import Form from './Components/Form'
import { CATEGORIES } from './data'


class App extends React.Component {

  state = {
    tasks: [
      {
        text: 'Buy rice',
        category: 'Food'
      },
      {
        text: 'Save a tenner',
        category: 'Money'
      },
      {
        text: 'Build a todo app',
        category: 'Code'
      },
      {
        text: 'Build todo API',
        category: 'Code'
      },
      {
        text: 'Get an ISA',
        category: 'Money'
      },
      {
        text: 'Cook rice',
        category: 'Food'
      },
      {
        text: 'Tidy house',
        category: 'Misc'
      }
    ],
    filter: 'All'
  }

  handleSelectCategory = (category) => {
    this.setState({filter: category})
  }

  handleSubmit = (newCategory) => {
    this.setState(prevState => {
      return ({tasks: [...prevState.tasks, newCategory]})
    })
  }

  handleDelete = (deleteTask) => {
    this.setState(prevState => {
      const matchedTaskIndex = prevState.tasks.findIndex(task => task.text === deleteTask.text)
      prevState.tasks.splice(matchedTaskIndex, 1)
      return ({tasks: prevState.tasks})
    })
  }

  render() {
    return (
      <div className="App">
        <h2>My tasks</h2>
        <CategoriesContainer categories={CATEGORIES} handleSelectCategory={this.handleSelectCategory} filter={this.state.filter}/>
        <Form handleSubmit={this.handleSubmit} />
        <TasksContainer tasks={this.state.tasks} filter={this.state.filter} handleDelete={this.handleDelete} />
      </div>
    );
  }
}


export default App;
