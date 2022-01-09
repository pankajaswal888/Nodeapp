var request = require('supertest');
var app = require('../index.js');
describe('GET /', function() {
    it('respond with hello world', function(done) {
        request(app).get('/health').expect('{ "response": "Great!, It works!" }', done);
    });
});
