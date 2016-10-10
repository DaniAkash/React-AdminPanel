"use strict";

var React = require('react');
var Link = require('react-router').Link;
var toastr = require('toastr');
var CourseActions = require('../../actions/courseActions');

var CourseList = React.createClass({
    propTypes: {
        courses: React.PropTypes.array.isRequired
    },
    
    deleteCourse: function (id, event) {
        event.preventDefault();
        CourseActions.deleteCourse(id);
        toastr.info('Course Deleted!');
    },
    
    render: function () {
        var createCourseRow = function (course) {
            return (
              <tr key={course.id}>
                <td><a href="#"><i className="fa fa-trash" onClick={this.deleteCourse.bind(this, course.id)}/></a></td>
                <td><Link to="manageCourses" params={{id: course.id}}>{course.id}</Link></td>
                <td><a href={course.watchHref} target="_blank">{course.title}</a></td>
                <td>{course.author.name}</td>
                <td>{course.length}</td>
                <td>{course.category}</td>
              </tr>
            );
        };

        return (
            <div>
                <table className="table">
                    <thead>
                        <th>Action</th>
                        <th>ID</th>
                        <th>Website</th>
                        <th>Author</th>
                        <th>Length</th>
                        <th>Category</th>
                    </thead>
                    <tbody>
                        {this.props.courses.map(createCourseRow, this)}
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports = CourseList;