# ABN Movie-night

Thank you for taking the time looking at my Developer Assessment. I look forward to discussing this with you. Feel free to ask any questions in the meantime by either sending me an E-mail, or just by calling me!

- geert.van.drunen@gmail.com
- +31 625218253

## Getting started

To run this project in production mode, please run the following commands:

```sh
npm install
```

```sh
npm run build
```

```sh
npm run preview
```

If you want to run this project in Development mode, please run the following commands:

```sh
npm install
```

```sh
npm run dev
```

## The Stack

This application is built with the following stack:

- Vue.js
- Typescript
- vue-query
- vue-router
- Vitest

### Vue.js - Composition API

The assignment mentioned it was platform agnostic, but we've discussed the requirement to use Vue.js. I decided to use the Composition API because that allows component logic to contain smaller, reusable functions rather than a monolithic component object.

### Typescript

Using Typescript is an essential part of the development cycle. It improved productivity by asserting the relevant typings, provides better code understanding and allows for more scalability. This is reflected in my solution, since i've used Typescript throughout.

### Vue-Query

The reason i opted for vue-query is because the nature of the application lies in fetching and maintaining data efficiently. Caching may be one of the most difficult things to get right, and this package facilitates a powerful toolbox to handle these challenges.

### Vue-Router

Vue router is a staple when it comes to Single Page Applications, and is powerful tool that provides out-of-the-box routing.

### Vitest

Vitest is specifically built for Vue.js and provides tailored functionalities for testing. This is very useful for Unit-testing and comes with built-in support for Directives and plugins (like Vue-router). It is also compatible with Vitejs. To start running the tests, execute the following command:

```sh
npm run test:unit
```

## Folder structure

The folder structure has been setup according to the Atomic Design principles. These principles ensure better maintainability, improved consistency by establishing patterns and testing ability by ensuring a proper structure. This also enhances reusability of components.

## API

The API utilizes the vue-query package to facilitate powerful data state management. The philosophy behind this is seperating two different states: client state and server state. Seperating these provides a more structured and better maintainable project. I've also taken the time to leave nothing up to chance and abstract away as much as possible in regards to endpoints and query keys (these keys are used for refetching or other actions).

## Styling

The CSS is imported using CSS Modules, this ensures that classnames will never be accidentally overlapping. I've also taken the time to introduce and work with CSS Variables, this ensures consistency and maintainability, especially when scaling projects.

## Components

With the Atomic Design Principles in place, the component structure ensures reusability and consistency across the application. The 'ShowCard' molecule is an example. This component is reused in a slider on the Homepage, and also used on the Search page, which can be found by clicking on the search button on the top right corner.

The 'SearchInput' component is also critical. This connects directly with our API to search for shows based on a query. To not flood the API with queries and lose performance, I've made sure to debounce the input field to ensure performance and stability.

The homepage uses the shows API call that returns all shows. Typically, you'd have seperate API calls with their respective parameters. In this case however, that was not possible. This is why i collected a list of genres to iterate over and render sliders with the filtered and sorted shows.
