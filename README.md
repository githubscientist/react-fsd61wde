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
[x] Lifting the state up

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
[x] Nested routes
[x] loaders

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

# React- Day -7: Revision & Doubt Clarification

## Contents:

[x] Working with array lists.  
[x] useState and useEffect - usage and examples in react.dev  
[x] Other commonly used hooks.
[x] Custom hooks  
[x] Provide mini-tasks to practice on day4 and day5 - class components and hooks (useState and useEffect), passing data from child to parent component, lifting the state up.  
[x] URL params in react-router-dom.  
[x] React router dom - revise  
[?] Session task on the admin dashboard.

## Other commonly used hooks:

- **useContext**: useContext is a hook that allows you to use the value of a context in a functional component.
- **useReducer**: useReducer is a hook that is used for state management in React.
- **useRef**: useRef is a hook that returns a mutable ref object whose .current property is initialized to the passed argument (initialValue).
- **useMemo**: useMemo is a hook that is used to memoize the value of a function.
- **useParams**: useParams is a hook that allows you to access the URL parameters in a functional component.
- **useLoaderData**: useLoaderData is a hook that is used to load data in a React component(react-router-dom).

## Custom hooks:

- Custom hooks are JavaScript functions that utilize one or more built-in hooks to create custom hooks to reuse the logic across multiple components.

## Provide mini-tasks to practice on day4 and day5:

Using hooks, useState and useEffect, create a React application that shows a blog page with a list of blog posts. Each of the blog posts should have a title, author, and content, date posted. Users can like a blog post or dislike a blog post with thumbs up and thumbs down buttons and see the count of likes and dislikes. Users should be able to write a comment on a blog post. The comments header should show the count of comments. Users should be able to delete a comment.

# React- Day -8: Context API

## Contents:

[x] Context-API  
[x] What is context, provide, createContext  
[x] Avoid props drilling  
[x] Session task – profile name changes

## Task:

https://docs.google.com/document/d/1ft6tjqQj6dsLbHJ1t2fPHgTQRSZwAE-qBzlxqTqWezw/edit#

### Props drilling:

- Props drilling is the process of passing props from one component to another component (at multiple levels) in React.

# React- Day -9: useRef & useReducer

## Contents:

[x] useRef, useReducer  
[x] Front end game demonstration - hangman / tictactoe / tile match

useRef:

Context:

- Let's say you have an input field, what we do normally in javascript is to get the element:

  - id: document.getElementById('input')
  - class: document.getElementsByClassName('input')

- But in React, we use useRef to get the element.
- useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue).

useReducer:

- useReducer is a hook that is used for state management in React.
- It is an alternative to useState.
- useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one.

useReducer vs useState:

- useState is built using useReducer.
- useState is more straightforward and easier to use.
- useReducer is more powerful and flexible.
- useReducer is more suitable for complex state logic.

[x] useReducer --revisited

# React- Day -10: Axios

## Contents:

[x] Playing around with API  
[x] fetch() or Axios  
[x] Implementing simple CRUD

Todo App:

Server URL: https://66baf2d46a4ab5edd636a422.mockapi.io/

Endpoints:

GET /todos - Get all todos
GET /todos/:id - Get a todo by id
POST /todos - Create a new todo
PUT /todos/:id - Update a todo by id
DELETE /todos/:id - Delete a todo by id

xhr vs fetch vs axios:

- **xhr**: xhr is a built-in object in web browsers that allows you to make HTTP requests and its a traditional way of making API calls.
- **fetch**: fetch is a modern way of making API calls in JavaScript.
- **axios**: axios is a promise-based HTTP client for the browser and node.js.

Note: axios uses fetch under the hood.

# React- Day -11: formik and Recap

## Contents:

[x] Formik

Formik:

- Formik is a small library that helps you with the 3 most annoying parts:
  1. Getting values in and out of form state
  2. Validation and error messages
  3. Handling form submission

# React- Day -12: Redux

## Contents:

[x] Intro to Redux - to understand the state management with react application

Redux:

- Redux is a predictable state container for JavaScript apps.
- Facebook used Flux architecture to build React applications. But it was complex and hard to debug. So, they introduced Redux.
- Redux is a state management library that can be used with any UI library or framework, including React, Angular, Vue, etc.

Redux context:

- We create slices of the state. Each slice is a reducer.
  Each slice contains the following:
  1. Initial state
  2. Actions
  3. Reducer
- We combine all the slices into a single store.

## Exercise: Build a Multi-Feature Blogging Application

### Objective:

Create a blogging application where users can create, edit, delete, and view blog posts. The application should use React concepts like Redux, React Router, useState, useReducer, useEffect, useRef, and Axios.

### Requirements:

#### Homepage:

- Display a list of blog posts with a summary of each post.
- Each post should have a "Read More" button that navigates to the detailed view of the post.

#### Post Detail Page:

- Display the full content of the blog post.
- Provide options to edit or delete the post.

#### Create/Edit Post Page:

- Include a form to create a new blog post or edit an existing one.
- The form should include fields for the title, content, and tags.
- Use useRef to focus on the title input when the page loads.
- Manage form state with useState and handle form submission using useEffect.

#### Global State Management (Redux):

- Use Redux to manage the state of the blog posts across the application.
- Include actions for adding, editing, and deleting posts.

#### Navigation (React Router):

- Implement routing to navigate between the homepage, post detail page, and create/edit post page.
- Use React Router to handle the navigation and URL parameters.

#### API Integration (Axios):

- Fetch the list of blog posts from a mock API when the application loads (use useEffect).
- Use Axios to handle the API requests for CRUD operations (Create, Read, Update, Delete).

#### Custom Hooks:

- Implement a custom hook that encapsulates the logic for form validation and can be reused across different forms in the application.

#### Side Effects (useEffect):

- Use useEffect to handle side effects like fetching data, updating the document title with the post title on the Post Detail page, and saving form data.

#### Complex State Management (useReducer):

- Implement useReducer to manage complex state transitions within the form, such as handling form input changes, validation errors, and submission status.

# Database- Day -1: MySQL

## Contents:

[x] Introduction to database  
[x] what is mysql?  
[x] intro to mysql engines  
[x] basic queries - create db, table  
[x] insert, update, alter  
[x] select - where clause, distinct, group by, order by, offset, limit

## Introduction to database

- Database is a collection of data that is organized in a way that it can be easily accessed, managed, and updated.
- Data is stored in either tables or objects(key-value pairs).
- Databases are categorized based on the type of data they store and the way they store data.
- There are two types of databases:
  - SQL: Structured Query Language: Structured databases or relational databases: MySQL, PostgreSQL, SQLite, Oracle, SQL Server.
  - NoSQL: Non-Structured Query Language: Unstructured databases or non-relational databases: MongoDB, CouchDB, Cassandra, Redis, Elasticsearch.

## What is MySQL?

- MySQL is an open-source relational database management system (RDBMS).
- It is based on SQL (Structured Query Language).
- MySQL is used for managing databases, storing data, and retrieving data.

## MySQL Engines:

- MySQL supports multiple storage engines that handle the SQL operations for different types of tables.
- The storage engine is responsible for managing the storage of data in the database.
- Some of the popular storage engines in MySQL are:
  - InnoDB
  - MyISAM
  - Memory
  - CSV
  - Archive
- Each storage engine has its own set of features and limitations.
- The default storage engine in MySQL is InnoDB.
- Database systems: MySQL, PostgreSQL, SQLite, Oracle, SQL Server.

## Basic queries:

- **Show Databases**:

```sql
SHOW DATABASES;
```

- **Create Database**:

```sql
CREATE DATABASE database_name;
```

- **Use Database**:

```sql
USE database_name;
```

- **See the current database**:

```sql
SELECT DATABASE();
```

Sample Database and Tables:

- **Create Table**:

```sql
create table employee(
    id int primary key,
    name varchar(50),
    age int,
    salary int,
    location varchar(50)
);
```

- **Insert Data**:

```sql
insert into employee values
(1, 'John', 30, 50000, 'New York'),
(2, 'Alice', 25, 40000, 'California'),
(3, 'Bob', 35, 60000, 'Texas'),
(4, 'Charlie', 28, 45000, 'Florida'),
(5, 'David', 32, 55000, 'New Jersey'),
(6, 'Eve', 27, 42000, 'Washington'),
(7, 'Frank', 29, 48000, 'Arizona'),
(8, 'Grace', 31, 52000, 'Colorado'),
(9, 'Helen', 33, 57000, 'Georgia'),
(10, 'Ivy', 26, 43000, 'Hawaii'),
(11, 'Jack', 34, 59000, 'Idaho'),
(12, 'Kevin', 36, 62000, 'Illinois'),
(13, 'Lily', 29, 48000, 'Indiana'),
(14, 'Mike', 30, 50000, 'Iowa'),
(15, 'Nancy', 28, 45000, 'Kansas');
```

- **Select Data**: (get all records)

```sql
select * from employee;
```

- **Update Data**: (update salary of employee with id 8)

```sql

update employee set salary = 52000 where id = 8;
```

- **Alter Table**: (add email column)

```sql
alter table employee add column email varchar(50);
```

- **Delete Data**: (delete employee with id 15)

```sql
delete from employee where id = 15;
```

- **Drop Table**: (delete table)

```sql
drop table employee;
```

- **distinct**: (get unique locations)

```sql
select distinct location from employee;
```

- **group by**: (group by location and count the number of employees in each location)

```sql
select location, count(*) from employee group by location;
```

- **order by**: (sort by salary in descending order)

```sql
select * from employee order by salary desc;
```

- **limit**: (get the first 5 records)

```sql
select * from employee limit 5;
```

- **offset**: (skip the first 5 records)

```sql
select * from employee limit 5 offset 5;
```

Constraints:

- Constraints are used to specify rules for the data in a table.
- Constraints can be specified when the table is created or after the table is created.

Types of Constraints:

1. **NOT NULL**: Ensures that a column cannot have a NULL value.
2. **UNIQUE**: Ensures that all values in a column are different.
3. **PRIMARY KEY**: Uniquely identifies each record in a table. Primary keys must contain unique values and cannot contain NULL values.
4. **FOREIGN KEY**: Uniquely identifies a record in another table.
