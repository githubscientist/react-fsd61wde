# React- Day -2: React

## Contents:

[x] Why react  
[x] Setup react project  
[x] Understanding JSX  
[x] Components (simple HTML layout to reusable react components)  
[x] Understanding the components  
[x] Passing data through props  
[x] Deploying react to netlify

## Pre-read:

https://react.dev/

## Task:

https://docs.google.com/document/d/11URBvZUsXT4Sr3YtCuv-5gcOHmkOmX976h-QKcXbWqs/edit

## Why React:

- React is a JavaScript library for building user interfaces developed by Facebook.
- React is used to build single page applications.
- React allows developers to create large web applications that can change data, without reloading the page.
- React allows developers to create reusable UI components.

Advantages of React:

1. **Easy to learn**: React is a JavaScript library, so it is easy to learn and understand.
2. **Reusable components**: React allows developers to create reusable UI components.
3. **Performance**: React uses a virtual DOM, which is a JavaScript object that represents the actual DOM elements. React only updates the actual DOM when the virtual DOM has changed, which makes React very fast.

### Single Page Applications:

- Single Page Applications are applications that load a single HTML page and dynamically update that page as the user interacts with the app.

### JSX:

- JSX is a syntax extension for JavaScript.
- JSX: JavaScript XML.
- JSX = HTML + JavaScript.

### Components:

- Components are the building blocks of any React application.

# React- Day -3: React hooks & states

## Contents:

[x] Working with array lists  
[x] Usage of keys  
[x] Conditional rendering  
[x] Handling Events  
[ ] Props vs State

## Task: [2.8.2024]

https://docs.google.com/document/d/1mqZqoxmPlEioKCwVfuOYIUcG2kESrYuocrYO4h9kiRk/edit

## Working with array lists:

- In React, you can use the map() method to loop over an array and render its elements.

## Usage of keys:

- Keys help React identify which items have changed, are added, or are removed.
- Keys should be given to the elements inside the array to give the elements a stable identity.

## Conditional rendering:

- Conditional rendering in React works the same way conditions work in JavaScript.
- To render a React element, you can use one of the following methods:
  1. If-else statements
  2. Conditional operator(?:)
  3. Logical && operator

## Handling Events:

- Handling events with React elements is very similar to handling events on DOM elements.

Exercise:

1. Create a new React application that displays a list of items as a table.

Data:

```jsx
const items = [
  { id: 1, product: "Mobile", price: 10000 },
  { id: 2, product: "Laptop", price: 50000 },
  { id: 3, product: "Tablet", price: 15000 },
  { id: 4, product: "Smartwatch", price: 5000 },
];
```
