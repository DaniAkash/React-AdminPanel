"use strict";

var React = require('react');
var Router = require('react-router');
var toastr = require('toastr');
var _ = require('lodash');
var CourseActions = require('../../actions/courseActions');
var CourseStore = require('../../stores/courseStore');
var CourseForm = require('./courseForm');

var ManageCoursePage = React.createClass({

    mixins: [
        Router.Navigation
    ],

    statics: {
        willTransitionFrom: function (transition, component) {

        }
    },

    getInitialState: function () {
        return {
            course: {
                id: "",
                title: "",
                watchHref: "",
                author: {
                    id: "",
                    name: ""
                },
                length: "",
                category: ""
            },
            dirty: false,
            errors: {}
        };
    },

    componentWillMount: function () {
        var courseId = this.props.params.id;
        if (courseId) {
            this.setState({course: CourseStore.getCourseById(courseId)});
        }
    },

    courseFormIsValid: function () {
        return true;
    },

    setCourseState: function (event) {
        this.setState({dirty: true});
        var field = event.target.name;
        this.state.course[field] = event.target.value;
        return this.setState({course: this.state.course});
    },

    saveCourse: function (event) {
        event.preventDefault();
        if(!this.courseFormIsValid()) {
            toastr.error('This form contains errors!');
            return;
        }
        if(this.state.course.id) {
            CourseActions.updateCourse(this.state.course);
        } else {
            CourseActions.createCourse(this.state.course);
        }
        this.setState({dirty: false});
        toastr.success('Course Saved!');
        this.transitionTo('courses');
    },

    render: function () {
        return <div>
            <h1>Manage Course</h1>
            <CourseForm
                course = {this.state.course}
                errors = {this.state.errors}
                onChange = {this.setCourseState}
                onSave = {this.saveCourse}
            />
        </div>;
    }
});

module.exports = ManageCoursePage;