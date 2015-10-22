var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Router;
var App = require('./components/layout/App');
var Login = require('./components/Login');
var TodosIndex = require('./components/TodosIndex');
var root = document.getElementById('content');

var routes = (
  <Route path="/" component={App}>
    <Route path="login" component={Login} />
    <Route path="todos" component={TodosIndex} />
  </Route>
);

ReactDOM.render(<Router>{routes}</Router>, root);
