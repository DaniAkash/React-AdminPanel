"use strict";

var React = require('react');
var Router = require('react-router');
var toastr = require('toastr');
var _ = require('lodash');
var AuthorForm = require('./authorForm');
var AuthorApi = require('../../api/authorApi');

var ManageAuthorPage = React.createClass({

    mixins: [
        Router.Navigation
    ],

    getInitialState: function() {
        return {
            author: { id: '', firstName: '', lastName: ''},
            errors: {}
        };
    },

    authorFormIsValid: function() {
        var formIsValid = true;
        this.state.errors = {}; // Clear pervious errors
        if(this.state.author.firstName.length < 3) { this.state.errors.firstName = "First Name should be atleast 3 Characters"; }
        if(this.state.author.lastName.length < 3) { this.state.errors.lastName = "Last Name should be atleast 3 Characters"; }
        if(this.state.author.firstName.length < 1) { this.state.errors.firstName = "First Name can't be empty!"; }
        if(this.state.author.lastName.length < 1) { this.state.errors.lastName = "Last Name can't be empty!"; }
        this.setState({errors: this.state.errors});
        if(!_.isEmpty(this.state.errors)) { return false; }
        return true;
    },

    setAuthorState: function(event) {
        var field = event.target.name;
        var value = event.target.value;
        this.state.author[field] = value;
        return this.setState({author: this.state.author});
    },

    saveAuthor: function(event) {
        event.preventDefault();
        if(!this.authorFormIsValid()) {
            toastr.error('The form contains errors!');
            return;
        }
        AuthorApi.saveAuthor(this.state.author);
        toastr.success('Author Saved!');
        this.transitionTo('authors');
    },

    render: function() {
        return (
            <div>
                <h1>Manage Author</h1>
                <AuthorForm
                    author = {this.state.author}
                    errors = {this.state.errors}
                    onChange = {this.setAuthorState}
                    onSave = {this.saveAuthor}/>
            </div>
        );
    }
});

module.exports = ManageAuthorPage;
