'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('breaker service', function() {
  it('registered the breakers service', () => {
    assert.ok(app.service('breakers'));
  });
});
