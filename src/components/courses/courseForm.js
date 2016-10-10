"use strict";

var React = require('react');
var TextInput = require('../common/textInput');
var Select = require('../common/selectInput');

var CourseForm = React.createClass({
    propTypes: {
        course: React.PropTypes.object.isRequired,
        onSave: React.PropTypes.func.isRequired,
        onChange: React.PropTypes.func.isRequired,
        errors: React.PropTypes.object
    },
    
    render: function () {
        return (
            <form>
                <TextInput name="title" label="Title" onChange={this.props.onChange} value={this.props.course.title}/>
                <Select name="author" label="Author" onChange={this.props.onChange} value={this.props.course.author.name}/>
                <TextInput name="category" label="Category" onChange={this.props.onChange} value={this.props.course.category}/>
                <TextInput name="website" label="Website" onChange={this.props.onChange} value={this.props.course.watchHref}/>
                <input type="submit" value="save" className="btn btn-default" onClick={this.props.onSave}/>
            </form>
        );
    }
});

module.exports = CourseForm;