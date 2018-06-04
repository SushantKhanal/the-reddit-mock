import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as BrowserRouter, Route, Link } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducer from "./reducers";
import "semantic-ui-css/semantic.min.css";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk, logger))
  );

  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById("root")
  );
registerServiceWorker();
