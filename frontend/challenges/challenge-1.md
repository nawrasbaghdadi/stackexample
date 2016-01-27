## Challenge 1 - Redux

__Make todos responsible to the checkbox next to them.__

### About this task

Start the application and play around a little bit. As you may have noticed adding
new todos already works smoothly. But have you tried checking a todo? Seems
pretty unresponsive for me. The reason for this is the missing implementation
on the application state store. This store is managed by a library called Redux.
It is your job to fill in the required implementation and create missing pieces.

### Tipps

To setup a new connection to the store Redux needs
- an action creator
- an action type to dispatch
- a reducer or an implementation inside of existing one
- a place in the state tree to store the information
Make sure to create every piece of code mentioned above.

### What's different in the Kiron Platform

#### Multiple reducers

On the Kiron Platform there are multiple reducers working a the same time. This
is called reducer composition. Every subtree in the state has its own reducer.
Since the state tree is structured into different subjects reducers usually
handle all the actions related to one job for example the account management.

#### Asynchronous actions

The Kiron Platform is connected to a backend and most actions communicate
with our RESTful API. We use the middleware
[redux-thunk](https://github.com/gaearon/redux-thunk) to dispatch async actions.
This way all asynchronous logic is handled in the action creators and the
remaining parts of the app work synchronous.
