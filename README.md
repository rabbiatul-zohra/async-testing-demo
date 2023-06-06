# Async testing in React

This is a very basic app to demonstrate the use of async testing approaches in React during a lecture, and so is far from a complete or beautiful application.

## Purpose

Created using `create-react-app`, it uses the [brewdog API](https://punkapi.com/documentation/v2) as a source of data to fetch a random beer to serve as a demonstration of how to mock asyncronous API calls when testing

## Screenshot

![Screenshot](./public/screenshot-beer-app.png)

## Installation

Clone down the repo and run

```
npm install
```

## Branches

The `act-error` branch code works, but when running the tests there is an error on the console:
![screenshot-error](./public/test-error-screenshot.png)
This could be fixed by following the suggestion of wrapping the render method in an `act` block, but this is not best practice so we should find a better way to handle this. We can do this by mocking axios itself, the `spy-on` branch of this repo shows a reworked example.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
