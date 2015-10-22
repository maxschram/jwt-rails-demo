var React = require('react');
var reqwest = require('reqwest');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

module.exports = React.createClass({
  mixins: [LinkedStateMixin],
  getInitialState: function () {
    return { email: "max@example.com", password: "password" };
  },
  handleSubmit: function (e) {
    e.preventDefault();
    reqwest({
      url: 'http://localhost:3000/login',
      method: 'post',
      type: 'json',
      data: { 
        email: this.state.email,
        password: this.state.password
      },
      success: function (resp) {
        localStorage.token = resp.token;
        this.props.history.pushState(null, '/todos');
      }.bind(this),
      error: function (err) {
        debugger;
      }});
  },
  render: function () {
    return (
      <div>
        <h3>Login</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Email</label>
          <input type="text"  valueLink={this.linkState('email')}/>
          <br/>
          <label>Password</label>
          <input type="text" valueLink={this.linkState('password')}/>
          <br/>
          <input type="submit" />
        </form>
      </div>
    );
  }
});
