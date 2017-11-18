'use strict';

const
	chai = require('chai'),
	assert = chai.assert,

	untitled = require('../')

describe('#untitled', function() {

	it('should return "Hello World!"', function() {
		assert.strictEqual(untitled(), 'Hello World!', 'Did not return "Hello World!"')
	})

})
