import React from 'react';
import ReactDOM from 'react-dom';
import {browserRouter} from "react-router-dom";
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <browserRouter>
    <App />
    </browserRouter>,

document.getElementById('root'));

serviceWorker.unregister();
