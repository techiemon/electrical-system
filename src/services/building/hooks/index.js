'use strict';

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication').hooks;

exports.before = {
  all: [
		// This hook validates the auth token.
    auth.verifyToken(),
		// This hook loads the current user.
    auth.populateUser(),
		// With this hook, you shall not pass if not authenticated.
    auth.restrictToAuthenticated()
  ],
  find: [
		// This hook appends userId: _id from the User object
		//{ idField: '_id', as: 'userId' } are the defaults as well
		auth.queryWithCurrentUser()
	],
  get: [
		// This hook checks that the user ID matches the record userId
		auth.restrictToOwner() // GET IS FAILING TO ADD HOOKS, can't pass context either.
		// auth.queryWithCurrentUser()
	],
  create: [
		// This hook applies the current user to the create query
		// so you don't need to set it in your mutation
		auth.associateCurrentUser({as: 'userId'})
	],
  update: [
		// This hook checks that the user ID matches the record userId
		auth.restrictToOwner()
	],
  patch: [
		// This hook checks that the user ID matches the record userId
		auth.restrictToOwner()
	],
  remove: [
		// This hook checks that the user ID matches the record userId
		auth.restrictToOwner()
	]
};

exports.after = {
  all: [],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};
