var clean = require('../lib/index').clean;

exports.TestThatAccountKeyIsStripped = function(test){
	var item = {
		Name: "Mongo",
		AccountKey: "123"
	};

	item = clean(item);
    
    test.equal(undefined, item.AccountKey);
    test.done();
};

exports.TestThat__vIsStripped = function(test){
	var item = {
		Name: "Mongo",
		__v: 123
	};

	item = clean(item);
    
    test.equal(undefined, item.AccountKey);
    test.done();
};

exports.TestThatUserIdIsStripped = function(test){
	var item = {
		Name: "Mongo",
		UserId: 123
	};

	item = clean(item);
    
    test.equal(undefined, item.AccountKey);
    test.done();
};

exports.TestThatEverythingIsStripped = function(test){
	var item = {
		Name: "Mongo",
		AccountKey: "123",
		__v: 123,
		UserId: 123
	};

	item = clean(item);
    
    test.equal(undefined, item.AccountKey);
    test.equal(undefined, item.__v);
    test.equal(undefined, item.UserId);
    test.done();
};