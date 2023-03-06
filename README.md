# Sauce Demo Functional Tests

> A set of automated frontend regression tests for Sauce Demo.

## Installation

NodeJS v18+ is required.
The `package.json` contains all necessary dependencies.  Just run:

```
npm install
```

## Run tests

Running the tests requires NodeJS v18+ and the latest version of Google Chrome browser. ChromeDriver is already included in the dependencies.

To run the tests:

```
npm test
```

## Framework Architecture

The Sauce Demo functional tests are implemented in WebDriverIO v8 with the Mocha test framework.

The test scenarios are contained in the `.spec.js` files in `test/specs`.

The associated page objects are in `test/pages`.

All test scenario file names should end in `.spec.js` (example: `login.spec.js`).

All page object file names should end in `page.js` (example: `inventory.page.js`).
