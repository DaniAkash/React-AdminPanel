"use strict";

var React = require('react');
var Input = require('../common/textInput');

var AuthorForm = React.createClass({

    render: function() {
        return (
            <form>

                <Input
                    name="firstName"
                    label="First Name"
                    value={this.props.firstName}
                    onChange={this.props.onChange}/>

                <Input
                    name="lastName"
                    label="Last Name"
                    value={this.props.lastName}
                    onChange={this.props.onChange}/>

                <input type="submit" value="save" className="btn btn-default"/>
            </form>
        );
    }
});

module.exports = AuthorForm;
