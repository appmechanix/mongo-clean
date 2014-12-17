mongo-clean
===========

Cleans unneeded stuff of mongo entities before sending them out over AJAX.


Installing
==========

```bash
npm install dwnz-mongo-clean --save
```

Setup
=====
```js
var cleaner = require('dwnz-mongo-clean');
```

Settings
========

You can supply keys that you want to ignore on an application wide context.

```js
cleaner.addGlobalKey('KeyToIgnore');
```

Using
=====
```js
var item = {
	Name: "Mongo",
	AccountKey: "123"
};

var cleanItem = cleaner.clean(item);
```

You can also specify keys to ignore in specific cleaning cases

```js
var item = {
	Name: "Mongo",
	AccountKey: "123",
	Test: "Test"
};

var cleanItem = cleaner.clean(item, ['Test']);
```