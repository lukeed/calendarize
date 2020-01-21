# calendarize [![build status](https://badgen.net/github/status/lukeed/calendarize)](https://github.com/lukeed/calendarize/actions) [![codecov](https://badgen.now.sh/codecov/c/github/lukeed/calendarize)](https://codecov.io/gh/lukeed/calendarize)

> A tiny (196B) utility to generate calendar views.

This function (optionally) accepts a date in exchange for a calendar view of that date's month.

Additionally, this module is delivered as:

* **ES Module**: [`dist/calendarize.mjs`](https://unpkg.com/calendarize/dist/index.mjs)
* **CommonJS**: [`dist/calendarize.js`](https://unpkg.com/calendarize/dist/index.js)
* **UMD**: [`dist/calendarize.min.js`](https://unpkg.com/calendarize)


## Install

```
$ npm install --save calendarize
```


## Usage

***via Date Instance***

```js
import calendarize from 'calendarize';

const date = new Date('2019-12-20');
const view = calendarize(date);
//=> [
//=>   [ 1,  2,  3,  4,  5,  6,  7],
//=>   [ 8,  9, 10, 11, 12, 13, 14],
//=>   [15, 16, 17, 18, 19, 20, 21],
//=>   [22, 23, 24, 25, 26, 27, 28],
//=>   [29, 30, 31,  0,  0,  0,  0],
//=> ]
```

***via Date String***

```js
import calendarize from 'calendarize';

const view = calendarize('Nov 01, 2019');
//=> [
//=>   [ 0,  0,  0,  0,  0,  1,  2],
//=>   [ 3,  4,  5,  6,  7,  8,  9],
//=>   [10, 11, 12, 13, 14, 15, 16],
//=>   [17, 18, 19, 20, 21, 22, 23],
//=>   [24, 25, 26, 27, 28, 29, 30],
//=> ]
```


## API

### calendarize(date?)
Returns: `Array<Week>`

An Array of `Week` Arrays is returned.<br>Each `Week` is an Array of 7 numbers, each representing a numerical date.

> **Important:** A zero (`0`) value represents a date that exists beyond the current month view.

#### date
Type: `string` | `number` | `Date`<br>
Default: `new Date()` – aka, today

The date you want to process.

> **Important**: Your `string|number` value will be cast to a `Date` object, which means Node.js may apply incorrect timezone!


## License

MIT © [Luke Edwards](https://lukeed.com)
