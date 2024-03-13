1. What is the difference between Component and PureComponent? Give an example where it might break my app.

Component re-renders whenever its props or state change, or whenever its parent component re-renders.

PureComponent, on the other hand, implements shouldComponentUpdate with a shallow prop and state comparison. This means it only re-renders if the props or state actually change. This can lead to performance improvements, as it avoids unnecessary re-renders.

However, using PureComponent can potentially break your app if you rely on deep data structures and you mutate them directly. Since PureComponent only does a shallow comparison, it won't detect changes in nested data structures.

Example:

```jsx
import React, { useState } from "react";

// Regular component
const MyComponent = ({ value }) => {
  return <div>{value}</div>;
};

// PureComponent equivalent
const MyPureComponent = React.memo(({ value }) => {
  return <div>{value}</div>;
});

const ParentComponent = () => {
  const [value, setValue] = useState(0);
  const [ignoredValue, setIgnoredValue] = useState(0);

  return (
    <div>
      <button onClick={() => setValue(value + 1)}>Increment value</button>
      <button onClick={() => setIgnoredValue(ignoredValue + 1)}>
        Increment ignored value
      </button>
      <MyComponent value={value} />
      <MyPureComponent value={value} />
    </div>
  );
};
```

2. Context + ShouldComponentUpdate might be dangerous. Why is that?

The problem with using shouldComponentUpdate in a component that uses a React context is that shouldComponentUpdate can block a component's re-render, but it can't prevent changes in the context value.

When the value of a context changes, all components consuming that context will re-render, irrespective of the return value of shouldComponentUpdate. This happens because changes in context are treated similarly to changes in props, and shouldComponentUpdate is not designed to block re-renders triggered by prop changes.

3. Describe 3 ways to pass information from a component to its PARENT.

   1. **Using Callbacks**: The parent component can pass a callback function to the child component as a prop. The child component can then call this callback function to pass information

   2. **Using Props**: The parent component can pass information

   3. **Using Context**: The parent component can provide a context value to the child component, and the child component can consume this context value using the useContext hook.

4. Give 2 ways to prevent components from re-rendering.

   1. **Using React.memo**: You can use the React.memo higher-order component to prevent a functional component from re-rendering if its props haven't changed.

   2. **Using shouldComponentUpdate**: You can use the shouldComponentUpdate lifecycle method to prevent a class component from re-rendering if its props or state haven't changed.

5. What is a fragment and why do we need it? Give an example where it might break my app.

A fragment is a way to group multiple elements together without adding an extra node to the DOM. It's useful when you need to return multiple elements from a component, but you don't want to add an extra div or other container element to the DOM.

6. Give 3 examples of the HOC pattern.

   1. **connect**: The connect function from the react-redux library is a higher-order component that connects a component to the Redux store.

   2. **withRouter**: The withRouter higher-order component from the react-router library provides access to the history, location, and match props in a component.

   3. **withStyles**: The withStyles higher-order component from the Material-UI library provides access to the theme object in a component.

7. What's the difference in handling exceptions in promises, callbacks and async...await?

   - **Promises**: You can use the .catch method to handle exceptions in promises.

   - **Callbacks**: You can use the error parameter in the callback function to handle exceptions in callbacks.

   - **async...await**: You can use the try...catch statement to handle exceptions in async...await functions.

8. How many arguments does setState take and why is it async.

The setState method takes two arguments: an object that represents the new state, and an optional callback function that is called after the state has been updated. Set state is async because it allows React to batch multiple state updates into a single re-render, which can improve performance.

9. List the steps needed to migrate a Class to Function Component.

   1. **Convert the class component to a function component**: Replace the class component with a function component.

   2. **Move the state to the useState hook**: Replace this.state and this.setState with the useState hook.

   3. **Move the lifecycle methods to useEffect**: Replace the lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount with the useEffect hook.

   4. **Move the context to the useContext hook**: Replace this.context with the useContext hook.

   5. **Move the refs to the useRef hook**: Replace this.refs with the useRef hook.

   6. **Move the event handlers to useCallback**: Replace the event handlers with the useCallback hook.
