"use strict";

var React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var routes = (
  <Route name="app" path="/" handler={require('./components/app')}>
    <DefaultRoute handler={require('./components/homePage')} />
    <Route name="authors" handler={require('./components/authors/authorPage')} />
    <Route name="manageAuthors" path="authors/:id" handler={require('./components/authors/manageAuthorPage')}/>
    <Route name="addAuthor" handler={require('./components/authors/manageAuthorPage')} />
    <Route name="courses" handler={require('./components/courses/coursePage')}/>
    <Route name="addCourse" handler={require('./components/notFoundPage')}/>
    <Route name="about" handler={require('./components/about/aboutPage')} />
    <NotFoundRoute handler={require('./components/notFoundPage')} />
    <Redirect from="about-us" to="about" />
    <Redirect from="author" to="authors" />
    <Redirect from="about/*" to="about" />
  </Route>
);

module.exports = routes;
