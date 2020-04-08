import React from "react";
import ReactDOM from "react-dom";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todo,
    };
  }

  addTask = (e, task) => {
    e.preventDefault();

    const newTask = {
      name: task,
      id: Date.now(),
    };

    this.setState({
      todo: [...this.state.todo, newTask],
    });
  };

  toggleTask = (taskId) => {
    this.setState({
      todo: this.state.todo.map((task) => {
        if (taskId === task.id) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      }),
    });
  };

  clearCompleted = (e) => {
    e.preventDefault();

    this.setState({
      todo: this.state.todo.filter((task) => !task.completed),
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>To Do!</h1>
          <TodoForm addTask={this.addTask} />
        </div>
        <TodoList
          todo={this.state.todo}
          toggleTask={this.toggleTask}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
