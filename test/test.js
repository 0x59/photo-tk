'use strict';

const
	chai = require('chai'),
	assert = chai.assert,

	std = require('../')

describe('#std', function() {

	it('should return "Hello World!"', function() {
		assert.strictEqual(std(), 'Hello World!', 'Did not return "Hello World!"')
	})

})
