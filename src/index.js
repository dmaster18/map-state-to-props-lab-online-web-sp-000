
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import manageUsers from './reducers/manageUsers';

// we wrap store in a function for testing purposes
export const configureStore = () => {
<<<<<<< HEAD
return createStore(manageBand, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
=======
  return createStore(manageUsers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
>>>>>>> eb6bb67da8fb827982339f8511b35ab7b479ceaa
};

let store = configureStore();

ReactDOM.render(
<<<<<<< HEAD
<Provider store={store}>
  <App store={store}/>
</Provider>,
document.getElementById('root')
=======
  <Provider store={store}>
    <App store={store}/>
  </Provider>,
  document.getElementById('root')
>>>>>>> eb6bb67da8fb827982339f8511b35ab7b479ceaa
);
