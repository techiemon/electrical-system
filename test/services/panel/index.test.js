'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('panel service', function() {
  it('registered the panels service', () => {
    assert.ok(app.service('panels'));
  });
});
