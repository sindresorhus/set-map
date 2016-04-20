# set-map [![Build Status](https://travis-ci.org/sindresorhus/set-map.svg?branch=master)](https://travis-ci.org/sindresorhus/set-map)

> Map over a [`Set`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)

Because `Set` is missing a `Set#map` method.


## Install

```
$ npm install --save set-map
```


## Usage

```js
const setMap = require('set-map');
const set = new Set(['foo', 'bar']);

setMap(set, x => 'yo' + x).values();
//=> ['yofoo', 'yobar']
```


## API

### setMap(input, callback)

#### input

Type: `Set`

`Set` to map over.

#### callback(element)

Type: `function`

Called for every element and should return the new element.


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
