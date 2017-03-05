'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('load service', function() {
  it('registered the loads service', () => {
    assert.ok(app.service('loads'));
  });
});
