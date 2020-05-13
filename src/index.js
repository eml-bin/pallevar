import React from 'react';
import ReactDOM from 'react-dom';
import Core from './Core';
import { createBrowserHistory } from "history"
import { Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/index.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas)
library.add(fab)

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Core />
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
