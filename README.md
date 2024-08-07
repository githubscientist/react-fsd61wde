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
[x] Props vs State

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

# React- Day -4: React components

## Contents:

[x] Components - In-depth  
[x] Component life cycle  
[x] Stateful and stateless components
[x] Reusable components  
[x] Passing dynamic data to component  
[x] Introduction to Hook

### Components - In-depth:

- Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.

Components can be created in two ways:

1. Function components or Stateless components
2. Class components or Stateful components

### Stateful and stateless components:

1. **Stateful components**:

- Stateful components are also called class components. They have a state object and can change the state of the component.

2. **Stateless components**:

- Stateless components are also called functional components.
- They are efficient and easy to understand compared to class components.
- They lacked initially the ability to use state and lifecycle methods, but with the introduction of hooks, they can now use state and lifecycle methods.

State:

- Component's memory to store the data.
- State is mutable.

# React- Day -5: React Hooks

## Contents:

[x] What is the hook?  
[x] Lifecycle of Hook  
[x] useState, useEffect  
[x] Props drilling  
[x] Passing data from child to parent component

## Task:

https://docs.google.com/document/d/1frCM6keoI6YKQqxm0XbgEP2CCZjDH5Zi8wEp_NXtk2g/edit

## What is the hook?

- Hooks are functions that let you use state and other React features in functional components.

## props vs state:

- Props are arguments passed into React components (from parent to child components) and are immutable.
- State is managed within the component and can be changed.

## Component lifecycle:

- Each component in React has a lifecycle which you can monitor and manipulate during its three main phases:
  1. **Mounting**: When the component is being inserted into the DOM.
  2. **Updating**: When the component is being re-rendered as a result of changes to either its props or state.
  3. **Unmounting**: When the component is being removed from the DOM.

Note: Lifecycle methods are applicable only for class components.

## Lifecycle of Hook:

- **useState**: useState is a Hook that allows you to have state variables in functional components.
- **useEffect**: useEffect is a Hook that allows you to perform side effects in functional components.
  Example: Data fetching, setting up a subscription, and manually changing the DOM in React components.

## useEffect:

- The useEffect hook runs after the first render and after every update.
- It is a close replacement for componentDidMount, componentDidUpdate, and componentWillUnmount.

## props drilling:

- Props drilling is the process of passing props from one component to another component (at multiple levels) in React.

## Passing data from child to parent component:

- In React, data is passed from parent to child components using props.
- To pass data from a child to a parent component, you can pass a function as a prop to the child component.

Steps to pass data from child to parent component:

1. Create a function in the parent component that accepts data as an argument.
2. Pass the function as a prop to the child component.
3. Call the function in the child component and pass the data as an argument.

# React- Day -6: Router

## Contents:

[x] react-router-dom  
[x] BrowserRouter, Switch, Link, Route, URL params

[ ] session task on the admin dashboard  
https://startbootstrap.com/previews/sb-admin-2

## Task:

https://docs.google.com/document/d/1nuVbWYwyP7N1zC9rAoO0taVvthGWsaHH-nfhNdklTQw/edit

## react-router-dom:

- React Router is a standard library for routing in React.
- It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps UI in sync with the URL.

Background Context:

- You are working on a project where you need to create a multi-page application using React.
- You need to implement routing in your application to navigate between different pages.
