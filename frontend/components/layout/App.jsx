var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Hello from React</h1>
        { this.props.children}
      </div>
    );
  }
});
