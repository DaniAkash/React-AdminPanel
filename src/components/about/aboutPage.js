"use strict";

var React = require('react');
var toastr = require('toastr');

var About = React.createClass({

	statics: {
		willTransitionTo: function(transition, params, query, callback) {
            toastr.info('This page contains some info about this web app');
            // transition.about();
            callback();
		},

		willTransitionFrom: function(transition, component) {
            toastr.info('You just left the about page...');
		}
	},

	render: function () {
		return (
			<div>
				<h1>About</h1>
				<p>
					This application uses the following technologies:
					<ul>
						<li>React</li>
						<li>React Router</li>
						<li>Flux</li>
						<li>Node</li>
						<li>Gulp</li>
						<li>Browserify</li>
						<li>Bootstrap</li>
					</ul>
				</p>
			</div>
		);
	}
});

module.exports = About;
