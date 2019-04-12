1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Map, filter and reduce can be used without creating side effects (since they don't mess with state). Map is the method used to create new objects and extend properties.
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions are what happens when the user interacts with an app. They return new JS objects based on the actions of the user (clicking, inputting data, etc.) to take in the actions of a user and return an object 

Reducers are functions that that take in actions actions and state as arguments to take in the actions and apply logic to them to return a new object without affecting state.

Store is what manages state of an application. When used it becomes the single source of truth (a single location that manages the state tree). It's useful on a large scale applications because it allows for easier prop drilling.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global in nature and Component is local. By keeping state in specific spots you can make a less resource intensive app, but if needed application state is there to provide commonly used things repeatedly.

1.  What is middleware?

Middleware is a stopgap between actions and reducers that can add new functionality to an action before it reaches the reducer which can be especially useful when creating asynchronous actions.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Thunk allows you to dispatch a multitude of actions from one action creator. It can do this thanks to providing action creators with extra utilities so they can return functions with a direct line to the given dispatch method.

1.  Which `react-redux` method links up our `components` with our `redux store`?

The provider component.
