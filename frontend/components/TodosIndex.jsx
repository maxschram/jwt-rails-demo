var React = require('react');
var TodoForm = require('./TodoForm');
var reqwest = require('reqwest');

module.exports = React.createClass({
  getInitialState: function () {
    return {todos: []}
  },
  componentDidMount: function () {
    reqwest({
      url: 'http://localhost:3000/todos',
      method: 'get',
      data: {},
      headers: {
        'Authorization': localStorage.token
      },
      success: function (todos) {
        this.setState({todos: todos});
      }.bind(this),
      error: function (err) {
        debugger;
      }
    });
  },
  render: function () {
    return (
      <div>
        <h3>Todos</h3>
        <ul>
          { this.state.todos.map(function (todo) {
            return <li key={todo.id}>{todo.body}</li>
            })
          }
        </ul>
        <TodoForm />
      </div>
    );
  }
});
