# set-map

> Map over a [`Set`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)

Because `Set` is missing a `Set#map` method.

## Install

```
$ npm install set-map
```

## Usage

```js
import setMap from 'set-map';

const set = new Set(['foo', 'bar']);

setMap(set, value => `yo${value}`).values();
//=> ['yofoo', 'yobar']
```

## API

### setMap(input, mapper)

#### input

Type: `Set`

The `Set` to map over.

#### mapper(element)

Type: `function`

Called for every element and should return the new element.
