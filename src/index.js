import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { combineReducers, compose, createStore, applyMiddleware } from 'redux';

import books from './store/reducers/books';
import thunk from "redux-thunk";
import { Provider } from "react-redux";

const rootReducer = combineReducers({
  bookReducer: books
});

const logger = (store) => {
  return (next) => {
    return (action) => {
      console.log('[Middleware] Dispatching', action)
      const result = next(action)
      console.log('[Middleware next state]', store.getState())
      return result
    }
  }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger, thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
