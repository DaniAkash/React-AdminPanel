"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var AuthorApi = require('../api/authorApi');
var ActionTypes = require('../constants/actionTypes');

var AuthorActions =  {
    createAuthor: function (author) {
        var  newAuthor = AuthorApi.saveAuthor(author);
        Dispatcher.dispatch({
            actionType: ActionTypes.CREATE_AUTHOR,
            author: newAuthor
        })
    }
};

module.exports = AuthorActions;