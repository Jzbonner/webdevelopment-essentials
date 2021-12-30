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
State management in React is a way to engender communication and sharing of data across components. State is a JavaScript object that represents the part of the component that can change based on a particular user event. Think of state as the memory of a component. When thinking about state management in React, it is important to understand that complexity grows with scale. It is common practice to use a state management tool, like [Redux](https://react-redux.js.org/) or [Recoil](https://recoiljs.org/) or [React Hooks](https://reactjs.org/docs/hooks-intro.html), to handle large/production-focused web projects. 

### Redux
Redux is a state management library that follows the functional programming paradigm with a heavy reliance on *immutability*. You will create a single global store to hold all of the app's state. A **reducer** function will receive *actions* that you *dispatch* from your components, and respond by returning a new copy of state. 

Because changes only occur through actions, it's possible to save and replay those actions and arrive at the same state. You can also take advantage of this to debug errors in production. 

**Drawbacks**
* The React-Redux workflow will be harder to understand especially for those who are used to React's class based component and are unfamiliar with functional programming 
* Heavy reliance on immutability can make it cumbersome to write reducers 
* Requires users to be explicit 

![react-redux-workflow](https://res.cloudinary.com/dzmc7doja/image/upload/v1640721270/notes-imgcontent/react-redux.gif)

### Recoil 
Recoil allows you to organize state data into a graph structure. It's API is very similar to React's `useState` and `ContextAPI`. In order to handle global state using *Recoil* you must wrap your component tree in a `RecoilRoot`. Then create "atoms" of state at the top level, each with a unique key. Components can then access this state with the `useRecoilState` hook, which works very similar to `useState`. Recoil keeps track of which components use which atoms when a reference to `useRecoilState` is made.

**Drawbacks**
* The library is only a few months old, so community resources and best practices are still being developed 
* Very similar to React Hooks, and depending on size/scale of the project, React Hooks may be a more appropriate solution as opposed to Recoil

![react-recoil-workflow](https://res.cloudinary.com/dzmc7doja/image/upload/v1640732012/notes-imgcontent/recoil.jpg)

### React Hooks
With the introduction of React Hooks, state management was brought to functional components. React is a not a front-end framework that looks for changes and updates accordingly (other frameworks like Angular and Vue do support this). React Hooks are used as indicators of when state has changed and ultimately of when a react component needs to be re-rendered. Essentially *Hooks* are a broad set of tools that run custom functions when a components *props* change. Since this method of state management doesn't require you to use classes, developers can use *Hooks* to write shorter, more readable code that is easy to share and maintain. 
* The `useState` hook is valuable when setting a value without referencing the current state. 
* The `useReducer` hook is useful when you need to reference a previous value or when you have different actions that require complex data manipulations.


**Drawbacks**
* Hooks require passing dependencies, if they are not passed it can lead to unexpected and hard-to-debug behavior. 
* Hooks rely on execution order, so it's impossible to call a hook conditionally 
* Because Hooks can be used for a multitude of functions like modifying the DOM, modifying the State, calling callbacks and so on, it's easy to overload your components with excessive hooks that add complexity and deter re-usability. 

| React Hook Lifecycle | React re-render Process |
|-----------|-------|
![react-hooks](https://res.cloudinary.com/dzmc7doja/image/upload/v1640761922/notes-imgcontent/react-hooks.jpg) | ![react-hooks-detail](https://res.cloudinary.com/dzmc7doja/image/upload/v1640762036/notes-imgcontent/react-hooks-2.png)

## Express, REST API and GraphQL 
Express is a minimal, yet flexible web application framework. It's minimal in the sense that by itself, Express does very little. It relies on other modules called middleware to provide the functionality that most applications will need. Express at it's most minimal is a router. It essentially takes a client request, matches it against any that are present, and executes a handler function that is associated with that route. The handler function is expected to generate the appropriate response. 

A route specification consist of :
* a HTTP method (GET, POST, etc.) 
* a path specification that matches the request URL 
* and the route handler

![httproutes](https://res.cloudinary.com/dzmc7doja/image/upload/v1640899280/notes-imgcontent/httpmethods.png)

```javascript 
// example routing and handler function 
app.get('/hello', (req, res) => {
  res.send('Hello world')
})
```

The route's method and path don't need to be specific. If you want to match all HTTP methods, you could write `app.all()`. If you needed to match multiple paths, you could pass in an array of paths, a regular expression or use *route parameters*.  

### Route Parameters 
*Route Parameters* are named segments in the path specification that match a part of the URL. If a match occurs, the value in that part of the URL is supplied as a variable in request object. 

```javascript
// example of using route parameters in express 
app.get('/customers/:customerId', ...)
```

In the above the example the `:/customerId` is being captured and supplied to the handler function as part of the request in `req.params`, with the name of the parameter as the key. Meaning that the URL `https://api.site.com/customers/1234` would provide 1234 as the `req.params.customerId`. Keep in mind that route parameters are matched in order of priority based on where they are declared in your code base. This does imply that Route Lookup is achievable when handling multiple routes, however specific paths should be declared ahead of more generic patterns in your `server.js` file. (i.e. a pattern like `/api/` or `/api/*` should be add after specific paths like `/api/issues` have been declared). 


## MongoDB

## Server Rendering 

## Advanced Section

