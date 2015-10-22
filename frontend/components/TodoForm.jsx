var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var reqwest = require('reqwest');

module.exports = React.createClass({
  mixins: [LinkedStateMixin],
  getInitialState: function () {
    return { body: "" };
  },
  createTodo: function (e) {
    e.preventDefault();
    reqwest({
      url: 'http://localhost:3000/todos',
      method: 'post',
      headers: { 'Authorization' : localStorage.token },
      type: 'json',
      data: { todo: this.state },
      success: function (res) {
        console.log("Todo added");
      },
      error: function (err) {
        debugger;
      }
    });
  },
  render: function () {
    return (
      <form onSubmit={this.createTodo}>
        <input type="text" valueLink={this.linkState('body')} />
        <input type="submit" />
      </form>
    );
  }
});

