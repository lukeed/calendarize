# calendarize [![build status](https://badgen.net/github/status/lukeed/calendarize)](https://github.com/lukeed/calendarize/actions) [![codecov](https://badgen.now.sh/codecov/c/github/lukeed/calendarize)](https://codecov.io/gh/lukeed/calendarize)

> A tiny (207B) utility to generate calendar views.

This function (optionally) accepts a date in exchange for a calendar view of that date's month.

**The output contains no labels!** This is ideal for calendar generator because it allows the developer to easily customize their labels, including full i18n/internationalization support! ([Demo](https://codepen.io/lukeed/pen/KKwrLRz))

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

An Array of `Week` Arrays is returned.

Each `Week` is an Array of 7 numbers, wherein each **index** is the `Day` of the week and each **value** is the numerical date. <br>The index is forwarded from [`Date.getDay`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay), which means that **index: 0** is Sunday.

> **Important:** A **value** of zero (`0`) represents a date that exists beyond the current month view.

#### date
Type: `string` | `number` | `Date`<br>
Default: `new Date()` – aka, today

The date you want to process.

> **Important**: Your `string|number` value will be cast to a `Date` object, which means Node.js may apply incorrect timezone!


## License

MIT © [Luke Edwards](https://lukeed.com)
