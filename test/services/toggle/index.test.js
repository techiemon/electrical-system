'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('toggle service', function() {
  it('registered the toggles service', () => {
    assert.ok(app.service('toggles'));
  });
});
