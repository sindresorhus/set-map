# set-map [![Build Status](https://travis-ci.org/sindresorhus/set-map.svg?branch=master)](https://travis-ci.org/sindresorhus/set-map)

> Map over a [`Set`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)

ES2015 `Set` is missing a `Set#map` method.


## Install

```
$ npm install --save set-map
```


## Usage

```js
var setMap = require('set-map');
var set = new Set(['foo', 'bar']);

setMap(set, function (el) {
	return 'yo' + el;
}).values();
//=> ['yofoo', 'yobar']
```


## API

### setMap(input, callback)

#### input

*Required*  
Type: `Set`

`Set` to map over.

#### callback(element)

Type: `function`

Called for every element and should return the new element.


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
