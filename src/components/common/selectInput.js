"use strict";

var React = require('react');

var SelectInput = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        label: React.PropTypes.string.isRequired,
        selectOnChange: React.PropTypes.func.isRequired,
        selected: React.PropTypes.string.isRequired,
        value: React.PropTypes.array,
        error: React.PropTypes.string
    },

    render: function () {
        var wrapperClass = "form-group";
        if(this.props.error && this.props.error.length > 0) {
            wrapperClass += " has-error";
        }
        var options = this.props.value;

        return (
            <div className={wrapperClass}>
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <div className="field">

                    <div className="input">{this.props.error}</div>
                </div>
            </div>
        );
    }
});

module.exports = SelectInput;