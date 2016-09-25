"use strict";

var React = require('react');
var Input = require('../common/textInput');

var AuthorForm = React.createClass({
    propTypes: {
        author: React.PropTypes.object.isRequired,
        onSave: React.PropTypes.func.isRequired,
        onChange: React.PropTypes.func.isRequired,
        errors: React.PropTypes.object
    },

    render: function() {
        return (
            <form>

                <Input
                    name="firstName"
                    label="First Name"
                    value={this.props.firstName}
                    error={this.props.errors.firstName}
                    onChange={this.props.onChange}/>

                <Input
                    name="lastName"
                    label="Last Name"
                    value={this.props.lastName}
                    error={this.props.errors.lastName}
                    onChange={this.props.onChange}/>

                <input type="submit" value="save" className="btn btn-default" onClick={this.props.onSave}/>
            </form>
        );
    }
});

module.exports = AuthorForm;
