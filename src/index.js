import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from "history";
import './semantic/dist/semantic.min.css';
import * as serviceWorker from './serviceWorker';
import { Router, Route, Switch } from "react-router-dom";
import indexRoutes from "./routes/index.jsx";

const hist = createBrowserHistory();
ReactDOM.render(  <Router history={hist}>
    <Switch>
      {indexRoutes.map((prop, key) => {
        return <Route path={prop.path} key={key} component={prop.component} />;
      })}
    </Switch>
  </Router>,
   document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
