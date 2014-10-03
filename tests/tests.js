var clean = require('mongo-clean').clean;
var assert = require('chai').assert;

var item = {
    Name: "Mongo",
    AccountKey: "123"
};

assert.equal(item.Name, 'Mongo', 'Name is correct');