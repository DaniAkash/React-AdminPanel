"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var _ = require('lodash');
var assign = require('object-assign');

var _courses = [];

var CourseStore = assign({}, EventEmitter.prototype, {
    addChangeListener: function (callback) {
        this.on('ActionTypes.CHANGE_EVENT', callback);
    },

    removeChangeListener: function (callback) {
        this.removeListener('ActionTypes.CHANGE_EVENT', callback);
    },

    emitChange: function () {
        this.emit('ActionTypes.CHANGE_EVENT');
    },

    getAllCourses: function () {
        return _courses;
    },

    getCourseById: function (id) {
        return _.find(_courses, {id: id});
    }
});

Dispatcher.register(function (action) {
   switch (action.actionType) {
       case ActionTypes.INITIALIZE:
           _courses = action.initialData.courses;
           CourseStore.emitChange();
           break;
       case ActionTypes.CREATE_COURSE:
           _courses.push(action.course);
           CourseStore.emitChange();
           break;
       case ActionTypes.UPDATE_COURSE:
           var existingCourse = _.find(_courses, {id: action.course.id});
           var existingCourseIndex = _.indexOf(_courses, existingCourse);
           _courses.splice(existingCourseIndex, 1, action.course);
           CourseStore.emitChange();
           break;
       case ActionTypes.DELETE_COURSE:
           console.log(action.id);
           _.remove(_courses, function (course) {
               return action.id === course.id;
           });
           CourseStore.emitChange();
           break;
       default:
           // Nothing to do here
   }
});

module.exports = CourseStore;