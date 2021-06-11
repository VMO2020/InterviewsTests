# REACT JS Interview Questions

Questions based in youtube channel "techsith".

## 1.- What is React JS?

React is a declarative and very powerful JavaScript library, which works with nested components and allows you to render each component individually.

## 2.- What is JSX?

JSX (short for JavaScript eXtension) is a React extension that makes it easy for web developers to modify their DOM by using simple, HTML-style code. JSX is compatible with any browser platform you might be working with.

## 3.- Name Lifecycle Methods and their purpose?

React has its components divided into 3 phases — Mounting, updating, and unmounting.

- useState(): It is used to update the state. It returns a pair: the current state value and a function that lets you update it.

```
const [state, setState] = useState(Initial Values);
```

- useEffect(): It serves the same purpose as componentDidMount, componentDidUpdate, componentWillUnmount in React classes. It will update only when the dependencies change.

```
useEffect(() => {
    // Update function .......
}, [dependencies]);
```

Other hooks are useContext, useReducer, useRef etc. You can also create your own custom hook.

## 4.- Why do we use arrow function in react?

Arrow functions don't redefine the value of "this" within their function body (take "this" from its lexical scope).

This makes it a lot easier to predict their behavior when passed as callbacks, and prevents bugs caused by use of "this" within callbacks.

Arrow functions are a shorthand function expression and we do not need to provide parentheses for one argument functions.

## 5.- How to prevent components from re-rendering?

If you’re using a React class component you can use the shouldComponentUpdate method or a React.PureComponent class extension to prevent a component from re-rendering.

For functional components:

- React.memo(): is a higher-order component (HOC), that prevents a component from re-rendering if the props (or values within it) have not changed.

For React hook we can use:

- useMemo(): We can return memoized values and avoid re-rendering if the dependencies to a function have not changed.

## 6.- Explain Error Boundaries?

Basically, error boundaries only handle errors in the parts of our code that involve React.

The naive approach to handling this kind of error would be to add a try/catch:

```
function Greeting({subject}) {
    try {
        return <div>Hello {subject.toUpperCase()}</div>
    }
    catch (error) {
        console.error(error);
    }
}
```

Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.

If some component in one of these UI areas crashes, the rest of them remain interactive.

```
<ErrorBoundaryComp>
  <MyComp />
</ErrorBoundaryComp>
```

## 7.- Best Lifecycle Method for making API calls?

- componentDidMount for class components.

- useEffect(): This hook serves the same purpose as componentDidMount

## 8.- Name some Patterns that React uses?

- React Hooks: These functions allow developers to use React without classes.

- Functional Components: Are also called stateless components, always render the same thing or only what is passed to them via props.

- Conditional Rendering: Allows you to create distinct components based on your needs and then render only the ones that are required by the application.

- Controlled Components: The controlled component takes the state through props.

- Render Props: Allow us to share the same state across different components, using a prop whose value is a function.

## 9.- Why would you use react in your proyects?

- Easy to learn: You just need basic knowledge of Vanila Javasript, CSS and HTML, to start learning React.

- It's good for making DRY code (Don't repeat yourself): Allows us to create reusable UI components.

- Great performance: Allows developers to create large web applications that can change data, without reloading the page.

- It's good for SEO.

- Have Native Approach with React Native.

- Testability: ReactJS applications are easy to test.

## 10.- What is css-in-js pattern?

Is a styling technique (inline css) where JavaScript is used to style components. It allows to abstract CSS to the component level itself, using JavaScript to describe styles in a declarative and maintainable way.

## 11.- Why can't you update state directly without setState()?

Mutating state directly can lead to odd bugs, and components that are hard to optimize. This will disrupt all the React's Lifecycle Methods. As a result, your app will behave abnormal or even crash.

- useState centralizes the state of a component in one place.

## 12.- How many ways you can conditionally render in react?

5 WAYS:

- if-else: We can apply the if-else conditional logic to JSX in React.

- AND operator (&&): If the expression resolves in TRUE the AND operator returns the evaluation of the right expression.

- Ternary operator: Ternary operator is a shorter form of the ‘if-else’ condition. The first part states the condition, the second part is the returned value if true and the last part is the returned value if false.

- Element variables: To hold the final element to be rendered based on the evaluation of the if-else statement.

- Return Null: return a null value instead of a JSX expression so that it would be evaluated but will not render anything.

## 13.- What is Fragments and why do we use it?

- Fragments let you group a list of children without adding extra nodes to the DOM.

- Why?: It’s a tiny bit faster and has less memory usage (no need to create an extra DOM node).

## 14.- How to do code-splitting in react?

The best way to introduce code-splitting into your app is through the dynamic import() syntax:

- using React.lazy() and Suspense wrapper (lazy-load).

You can create multiple bundles that can be dynamically loaded at runtime, can dramatically improve the performance of your app, avoided loading code that the user may never need, and reduced the amount of code needed during the initial load.

## 15.- What are some alternatives to redux?

- Use hooks: useContext() and useReducer()

- mobX

- Apollo + graphQL

- RxJS

## 16.- What is redux middleware?

Add another layer in the middle of "dispatching an action" , and the moment it reaches the "reducer". It does so by letting you dispatch async actions in addition to normal actions.

People use Redux middleware for logging, crash reporting, talking to an asynchronous API, routing, and more.

## 17.- What is the difference between redux-saga and redux-thunk?

A thunk is a function that acts as a wrapper in that it wraps an expression to delay its evaluation.

Actually, Both of them are middleware for Redux to deal with "asynchronous actions".

- Thunk allows "Promises"
- Saga use "Generators".

Redux-Thunk: Less boilerplate code, Easy to understand but may be difficult to scale up and difficult to test.

## 18.- What is CRUD?

(create, read, update and delete) application.

## 19.- How to optimize a React app?

Its depend of the application =>
"Ask:" Please, may you describe the application?
"Ask:" What do you mean about performance? What kinds of performance issues?

- Step 1: You have to realize which areas of the application are running badly.
- Step 2: Fix or improve them:
- Step 2.a: Find unnecessary re-renders => useMemo()
- Step 2.b: Check if you are using DRY code. (Don't repeat yourself)
- Step 2.c: It's slow? => splitting the code, using React.lazy
- Step 2.d: It's crashing? => use Error Boundaries, think of immutability.
- Step 2.e: Check for CDN issues.
- Step 2.f: Check for server performance issues.

Note1: Functional components are better than class components.

Note2: Arrow functions are better.

## 20.- Explain Virtual DOM:

The virtual DOM is only a virtual representation of the DOM. Everytime the state of our application changes, the virtual DOM gets updated instead of the real DOM.

Virtual DOM performs significantly better than the real DOM. That because every time that you update something in the real DOM, you need re-paint it in the DOM. It is time consuming.
