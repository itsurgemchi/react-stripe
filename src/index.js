import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Values } from "redux-form-website-template";
import store from "./store/store";
import showResults from "./Form/showResults";
import AsyncValidationForm from "./Form/ReduxFrom";
import TakeMoney from '../src/stripe/stripe';

const rootEl = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <div style={{ padding: 15 }}>
      <h2>Asynchronous Validation</h2>
      <p>
        Usernames that will <em>fail</em> validation: <code>john</code>
        , <code>paul</code>
        , <code>george</code> or <code>ringo</code>
        .
      </p>
      <AsyncValidationForm onSubmit={showResults} />
      <Values form="asyncValidation" />
      <TakeMoney />
    </div>
  </Provider>,
  rootEl
);
