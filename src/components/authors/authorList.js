"use strict";

var React = require('react');
var Link = require('react-router').Link;
var toastr = require('toastr');
var AuthorActions = require('../../actions/authorActions');

var AuthorList = React.createClass({
	propTypes: {
		authors: React.PropTypes.array.isRequired
	},

	deleteAuthor: function (id, event) {
		event.preventDefault();
		AuthorActions.deleteAuthor(id);
		toastr.info('Author Deleted!');
	},

	render: function() {
		var createAuthorRow = function(author) {
			return (
				<tr key={author.id}>
					<td><a href="#"><i className="fa fa-trash" onClick={this.deleteAuthor.bind(this, author.id)}></i></a></td>
					<td><Link to="manageAuthors" params={{id: author.id}}>{author.id}</Link></td>
					<td>{author.firstName} {author.lastName}</td>
				</tr>
			);
		};

		return (
			<div>
				<table className="table">
					<thead>
						<th>Actions</th>
						<th>ID</th>
						<th>Name</th>
					</thead>
					<tbody>
						{this.props.authors.map(createAuthorRow, this)}
					</tbody>
				</table>
			</div>
		);
	}
});

module.exports = AuthorList;
