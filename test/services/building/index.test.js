'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('building service', function() {
  it('registered the buildings service', () => {
    assert.ok(app.service('buildings'));
  });
});
