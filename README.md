# Auto Shop - Car Listing Application

This project is a web application for listing cars, built with React. It features car filtering, pagination, and the ability to add or remove cars from your favorite list. The project fetches car data from an API and provides an interactive experience for browsing available cars.

## Getting Started

To get started with this project, follow the steps below.

### Prerequisites

Ensure you have the following tools installed:

- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installing

Clone the repository:

```bash
git clone https://github.com/vlada-mozgova/auto-shop.git
cd auto-shop
```

Install the dependencies:

```bash
npm install
```

### Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.
Open http://localhost:8080 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in interactive watch mode.
Tests are written with Jest and React Testing Library.

### `npm run build`

Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include hashes.
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you eject, you can’t go back!**

If you aren't satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and transitive dependencies (webpack, Babel, ESLint, etc.) right into your project so you have full control over them. All commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point, you're on your own.

You don’t have to ever use eject. The curated feature set is suitable for small and medium deployments, and you shouldn't feel obligated to use this feature.

## Testing

Tests are written using Jest and React Testing Library.

To run tests:

```bash
npm test
```

To run tests in watch mode (useful during development):

```bash
npm test -- --watch
```

## Features

- **Car Listings**: Display available cars with details such as model, manufacturer, fuel type, mileage, and color.
- **Pagination**: Navigate between pages of cars with the ability to go to next or previous pages.
- **Car Filters**: Filter cars by various attributes like manufacturer and fuel type.
- **Favorites**: Add cars to your favorites list or remove them.
- **Loading State**: Show a loading state while the car data is being fetched from the server.

## Technologies Used

- **React**: Frontend framework for building the UI components.
- **React Router**: For navigation between different pages of the application.
- **Material-UI**: A popular React UI framework for styling.
- **Jest**: Testing framework for running unit tests.
- **React Testing Library**: A set of utilities for testing React components.
- **SCSS**: For styling the components in a modular way.

## Learn More

You can learn more about React and its concepts in the official documentation:

- [React documentation](https://reactjs.org/)
- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
