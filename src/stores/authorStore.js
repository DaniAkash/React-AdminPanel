"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var _ = require('lodash');
var assign = require('object-assign');

var _authors = [];

var AuthorStore = assign({}, EventEmitter.prototype, {
   addChangeListener: function (callback) {
       this.on('ActionTypes.CREATE_AUTHOR', callback);
   },

   removeChangeListener: function (callback) {
       this.removeListener('ActionTypes.CREATE_AUTHOR', callback);
   },

   emitChange: function () {
       this.emit('ActionTypes.CREATE_AUTHOR');
   },

   getAllAuthors: function () {
       return _authors;
   },

   getAuthorById: function (id) {
       return _.find(_authors, {id: id});
   }
});

Dispatcher.register(function (action) {
   switch (action.actionType) {
       case ActionTypes.INITIALIZE:
           _authors = action.initialData.authors;
           AuthorStore.emitChange();
           break;
       case ActionTypes.CREATE_AUTHOR:
           _authors.push(action.author);
           AuthorStore.emitChange();
           break;
   }
});

module.exports = AuthorStore;