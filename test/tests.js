var clean = require('../lib/index').clean;

exports.TestThatAccountKeyIsStripped = function (test) {
    var item = {
        Name: "Mongo",
        AccountKey: "123"
    };

    item = clean(item);

    test.equal(undefined, item.AccountKey);
    test.done();
};

exports.TestThat__vIsStripped = function (test) {
    var item = {
        Name: "Mongo",
        __v: 123
    };

    item = clean(item);

    test.equal(undefined, item.__v);
    test.done();
};

exports.TestThatUserIdIsStripped = function (test) {
    var item = {
        Name: "Mongo",
        UserId: 123
    };

    item = clean(item);

    test.equal(undefined, item.UserId);
    test.done();
};

exports.TestThatEverythingIsStripped = function (test) {
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

exports.TestThatItemsInArraysAreStripped = function (test) {
    var items = [
        {
            Name: "Mongo",
            AccountKey: "123"
        },
        {
            Name: "Mongo",
            AccountKey: "123"
        },
        {
            Name: "Mongo",
            AccountKey: "123"
        },
        {
            Name: "Mongo",
            AccountKey: "123"
        }
    ];

    items = clean(items);

    for (var i = 0; i < items.length; i++) {
        test.equal(undefined, items[i].AccountKey);
    }

    test.done();
};

exports.TestThatCustomKeyIsRemovedFromSingleEntity = function (test) {
    var item = {
        Name: "Mongo",
        AccountKey: "123",
        Password: "Test"
    };

    item = clean(item, ['Password']);

    test.equal(undefined, item.AccountKey);
    test.equal(undefined, item.Password);

    test.done();
};

exports.TestThatCustomKeyIsRemovedFromArray = function (test) {
    var items = [
        {
            Name: "Mongo",
            AccountKey: "123",
            Password: "Test"
        },
        {
            Name: "Mongo",
            AccountKey: "123",
            Password: "Test"
        },
        {
            Name: "Mongo",
            AccountKey: "123",
            Password: "Test"
        },
        {
            Name: "Mongo",
            AccountKey: "123",
            Password: "Test"
        }
    ];

    items = clean(items, ['Password']);

    for (var i = 0; i < items.length; i++) {
        test.equal(undefined, items[i].AccountKey);
        test.equal(undefined, items[i].Password);
    }

    test.done();
};

exports.TestThatExtraKeyNonArrayThrowsAnError = function (test) {
    var item = {
        Name: "Mongo",
        AccountKey: "123"
    };

    test.throws(function () {
        clean(item, 'test')
    }, Error, "removeKeys must be an array");
    test.done();
};

exports.TestThatAddingAGlobalRemoveKeyRemovesItFromTheList = function (test) {
    require('../lib/index').settings.globalRemove.push('Test');

    var item = {
        Name: "Mongo",
        AccountKey: "123",
        Test: "Test"
    };

    item = clean(item);

    test.equal(undefined, item.Test);

    test.done();
};

exports.TestThatNonGlobalKeysDontHangAround = function (test) {
    var item = {
        name: 'Daniel',
        created: 1
    };

    var outItem = clean(item, ['created']);
    test.equal(undefined, outItem.created);

    var item2 = {
        name: 'Daniel',
        created: 1
    };

    var outItem2 = clean(item2);
    test.equal(1, outItem2.created);

    test.done();
};