"use strict";

var authors = require('./authorData').authors;
var _ = require('lodash');

var _generateId = function(author) {
	return author.firstName.toLowerCase() + '-' + author.lastName.toLowerCase();
};

var AuthorApi = {
	getAllAuthors: function() {
		return authors;
	},

	getAuthorById: function(id) {
		return _.find(authors, {id: id});
	},

	saveAuthor: function(author) {
		console.log('Pretend this just saved the author to the DB via AJAX call...');

		if (!author.id) {
			author.id = _generateId(author);
			authors.push(author);
		}

		return author;
	},

	deleteAuthor: function(id) {
		console.log('Pretend this just deleted the author from the DB via an AJAX call...');
	}
};

module.exports = AuthorApi;
