"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var CourseStore = require('../../stores/courseStore');
var CourseList = require('./courseList');
var CourseForm = require('./courseForm');

var CoursePage = React.createClass({
   getInitialState: function () {
       return {
           courses: []
       };
   },

   componentWillMount: function () {
       CourseStore.addChangeListener(this._onChange);
   },

   componentWillUnmount: function () {
       CourseStore.removeChangeListener(this._onChange);
   },

   _onChange: function () {
       this.setState({courses: CourseStore.getAllCourses()});
   },

   componentDidMount: function () {
       if(this.isMounted()) {
           this.setState({courses: CourseStore.getAllCourses()});
       }

   },

   render: function () {
       return (
         <div>
             <h1>Courses</h1>
             <Link to="addCourse" className="btn btn-default">Add Course</Link>
             <CourseList courses={this.state.courses}/>
         </div>
       );
   }
});

module.exports = CoursePage;