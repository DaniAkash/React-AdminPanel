"use strict";

var React = require('react');
var Router = require('react-router');
var toastr = require('toastr');
var _ = require('lodash');
var AuthorActions = require('../../actions/authorActions');
var AuthorStore = require('../../stores/authorStore');
var AuthorForm = require('./authorForm');

var ManageAuthorPage = React.createClass({

    mixins: [
        Router.Navigation
    ],

    statics: {
        willTransitionFrom: function(transition, component) {
            if(component.state.dirty && !confirm('Leave without saving?')) {
                transition.abort();
            }
        }
    },

    getInitialState: function() {
        return {
            author: { id: '', firstName: '', lastName: ''},
            errors: {},
            dirty: false
        };
    },

    componentWillMount: function() {
        var authorId = this.props.params.id;
        if(authorId) {
            this.setState({author: AuthorStore.getAuthorById(authorId)});
        }
    },

    authorFormIsValid: function() {
        var formIsValid = true;
        this.state.errors = {}; // Clear pervious errors
        if(this.state.author.firstName.length < 3) { this.state.errors.firstName = "First Name should be atleast 3 Characters"; }
        if(this.state.author.lastName.length < 3) { this.state.errors.lastName = "Last Name should be atleast 3 Characters"; }
        if(this.state.author.firstName.length < 1) { this.state.errors.firstName = "First Name can't be empty!"; }
        if(this.state.author.lastName.length < 1) { this.state.errors.lastName = "Last Name can't be empty!"; }
        this.setState({errors: this.state.errors});
        return _.isEmpty(this.state.errors);
    },

    setAuthorState: function(event) {
        this.setState({dirty: true});
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
        AuthorActions.createAuthor(this.state.author);
        this.setState({dirty: false});
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
