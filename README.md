# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

### `npm lint`

Runs ESLint to analyse the code and check if everything follows the rules stablished in .elintrc file

### `npm test:coverage`

Launches the test runner and gives a summary about the total coverage of the application.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Comments

We will use localStorage to manage cached data.

### Used tecnologies/libraries

- [react-router-dom v6](https://reactrouter.com/en/main) to manage product routing
- [ESLint](https://eslint.org/) altogether with [Prettier](https://prettier.io/) to manage quality and code autoformtting
- [tailwindcss](https://tailwindcss.com/docs) to manage styles

## Improvements

- Add Skeletons as it is a SPA
- Add Cypress to cover E2E side
- Cart management
  - Add cart page/component to show the content of it
  - Add expiration time for cart
  - Add remove product action
- Add JSDocs to create automated documentation pages
- Accessibility
