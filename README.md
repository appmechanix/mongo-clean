mongo-clean
===========

Cleans unneeded stuff of mongo entities before sending them out over AJAX.


Installing
==========

```bash
npm install dwnz-mongo-clean --save
```

Using
=====
```js
var clean = require('mongo-clean').clean;

var item = {
	Name: "Mongo",
	AccountKey: "123"
};

console.log(clean(item));
```
