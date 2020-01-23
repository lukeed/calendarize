# calendarize [![build status](https://badgen.net/github/status/lukeed/calendarize)](https://github.com/lukeed/calendarize/actions) [![codecov](https://badgen.now.sh/codecov/c/github/lukeed/calendarize)](https://codecov.io/gh/lukeed/calendarize)

> A tiny (202B) utility to generate calendar views.

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

// Week = [Sun, Mon, Tue, Wed, Thu, Fri, Sat]
const view = calendarize(new Date('2019-12-20'));
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

// Week = [Sun, Mon, Tue, Wed, Thu, Fri, Sat]
const view = calendarize('Nov 01, 2019');
//=> [
//=>   [ 0,  0,  0,  0,  0,  1,  2],
//=>   [ 3,  4,  5,  6,  7,  8,  9],
//=>   [10, 11, 12, 13, 14, 15, 16],
//=>   [17, 18, 19, 20, 21, 22, 23],
//=>   [24, 25, 26, 27, 28, 29, 30],
//=> ]
```


***with Weeks starting on Monday***

> **Note:** Uses the [`offset`](#offset) parameter.

```js
import calendarize from 'calendarize';

// Week = [Mon, Tue, Wed, Thu, Fri, Sat, Sun]
const view = calendarize('Nov 01, 2019', 1);
//=> [
//=>   [ 0,  0,  0,  0,  1,  2,  3],
//=>   [ 4,  5,  6,  7,  8,  9, 10],
//=>   [11, 12, 13, 14, 15, 16, 17],
//=>   [18, 19, 20, 21, 22, 23, 24],
//=>   [25, 26, 27, 28, 29, 30,  0],
//=> ]
```


## API

### calendarize(date?, offset?)
Returns: `Array<Week>`

An Array of `Week` Arrays is returned.

Each `Week` is an Array of 7 numbers, wherein each **index** is the `Day` of the week and each **value** is the numerical date. <br>The index is forwarded from [`Date.getDay`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay), which means that **index: 0** is Sunday.

> **Important:** A **value** of zero (`0`) represents a date that exists beyond the current month view.

#### date
Type: `string` | `number` | `Date`<br>
Default: `new Date()` – aka, today

The date you want to process.

> **Important**: Your `string|number` value will be cast to a `Date` object, which means Node.js may apply incorrect timezone!

#### offset
Type: `number`<br>
Default: `0`

A positive or negative day offset to modify which day of the week the calendar should start.<br>
This offset is ***relative to Sunday*** – so, by default, an offset of `0` will mean that your Weeks will start on Sundays.

> **Note:** Some parts of the globe expect calendars to start on Sunday, Saturday, or Monday: [see map](https://i.redd.it/qcz8nu53lk231.png)

***Example Offsets***

* Monday: `1`
* Tuesday: `2`
* ...
* Friday: `5` or `-2`
* Saturday: `6` or `-1`

If you use `offset: 1`, this means you want the `Week`s to start on Monday. In turn, the 0th value of each `Week` array will be Monday's date.

```js
// The first week of Jan 2020:

// start = Sunday (default)
calendarize('Jan 01, 2020');
// =>    [[0, 0, 0, 1, 2, 3, 4], ...]
// (days: [S, M, T, W, T, F, S])

// start = Monday (offset: 1)
calendarize('Jan 01, 2020', 1);
// =>    [[0, 0, 1, 2, 3, 4, 5], ...]
// (days: [M, T, W, T, F, S, S])
```


## License

MIT © [Luke Edwards](https://lukeed.com)
