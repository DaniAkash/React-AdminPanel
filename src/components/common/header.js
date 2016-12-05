"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
	render: function() {
		return (
        <nav className="navbar navbar-default">
        <a href="https://github.com/DaniAkash/React-AdminPanel/fork"><img style={{position: 'absolute', top: '0', right: '0', border: '0'}} src="https://camo.githubusercontent.com/a6677b08c955af8400f44c6298f40e7d19cc5b2d/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f677261795f3664366436642e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_gray_6d6d6d.png" height="175px" width="175px" /></a>
          <div className="container-fluid">
						<Link to="app" className="navbar-brand">
							<img src="images/power-user.png" height="32px" width="32px" />
						</Link>
						<ul className="nav navbar-nav">
							<li><Link to="app">Home</Link></li>
							<li><Link to="authors">Authors</Link></li>
							<li><Link to="about">About</Link></li>
						</ul>
          </div>
        </nav>
		);
	}
});

module.exports = Header;
