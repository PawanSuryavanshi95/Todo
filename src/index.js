import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';
import { BrowserRouter as Router } from "react-router-dom";
import Auth0ProviderWithHistory from './auth0-provider-with-history';

const store = createStore(rootReducer);

ReactDOM.render(
  <Router>
    <Auth0ProviderWithHistory>
      <Provider store={store}>
      <App />
      </Provider>
    </Auth0ProviderWithHistory>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
