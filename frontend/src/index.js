import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App';
import reducer from './reducers/reducer';

// dependencyy of material-ui
import reactTapEventPlugin from 'react-tap-event-plugin';
reactTapEventPlugin();

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={ store } >
    <App />
  </Provider>,
  document.getElementById('root')
);
