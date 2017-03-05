'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('image service', function() {
  it('registered the images service', () => {
    assert.ok(app.service('images'));
  });
});
