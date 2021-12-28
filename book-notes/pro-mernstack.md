[comment]: # (link this book {https://www.amazon.com/Pro-MERN-Stack-Development-Express/dp/1484243900})

# Pro MERN Stack: Full Stack Web App Development 
[Pro MERN Stack](https://www.amazon.com/Pro-MERN-Stack-Development-Express/dp/1484243900)
Full stack web application development with mongodb, express, react and node.js. Understanding the client side (front-end), the server side (back-end) and the middleware that connects the two. Developing a full stack application requires a focus on design, app logic and error handling. This book explores how the modern MERN tech stack enables developers to build full functional and reliable software applications. 

## What is MERN Stack?
Any web application is built using multiple technologies and the combination of these technologies is called a stack (example: LAMP - Linux, Apache, MySQL, PHP). The MEAN stack was one of the early open-source stacks that sparked a shift towards Single Page Applications and the adoption of NoSQL. Over the years, Angular.js, has brought on the rise of other front-end frameworks such as React.js, Vue.js, etc. The MERN stack was created as a way to primarily utilize the core React library for client-side rendering in place of the MVC architecture that Angular offers. 

## React Components Overview
There are two main ways of coding React Components: **Class-Based Comopnents and Functional Components**. The difference among the two is in how the underlying JSX is rendered. A functional compenent is just a plain JavaScript function that returns JSX. A class component is a JavaScript class tht extends the `React.Component`, which has a render method. Although there are two supported methods for rendering UI in react, the introduction of **React Hooks** has made functional components the preferred choice. Functional Components allow you to manipulate state (`useState` and `useReducer` hooks); sequence lifecylce methods (`useEffect` and ` useLayoutEffect`) and employ memoization (`React.memo` HOC). The sections to come will take a deeper dive into state management in React, lifecyle events and best practices for performance optimization. 

```javascript
// example of a functional component in React
import React from "react";

const FunctionalComponent = () => {
  return <h1>Hello, World!</h1> 
}
```

Essentially components in react optionally accept input (in the form of properties -- `props`) and return a react element that describes how a section of the UI should appear. Components in React are exportable which allows developers to employ modularity in their code bases. For instance: 

```javascript
//example welcome.js file 
import React from "react";

const Welcome = (props) => {
  <h1>Hello, {props.name}</h1>
}

export default Welcome

//exmaple App.js file 
import Welcome from "./Welcome";

function App() {
  return (
    <div className="App">
      <Welcome />
    </div>
  )
}
```

A functional component in React is: 
* A JavaScript (ES6) function 
* Must return a React element (JSX)
* Always starts with a capital letter (naming convention)
* Takes `props` as a parameter if necessary

In older version of React, Class components were primarily used to manage state. Functional components were only used for rendering UI elements. Now with the introduction of React Hooks, functional components has become the standard for managing data and life-cycle methods in your client side applications.  

## React State
State management in React is a way to engender communication and sharing of data across components. State is a JavaScript object that represents the part of the component that can change based on a particular user event. Think of state as the memory of a component.  

## Express, GraphQL, and REST API 

## MongoDB

## Server Rendering 

## Advanced Section

