import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Hello from './component/Hello';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contoh from './Home.js';
import Tabel from './Table.js';
import Jumbo from './Jumbotron.js';
import Carde from './Card.js';


ReactDOM.render(<Contoh />, document.getElementById('navbar'));
ReactDOM.render(<Jumbo />, document.getElementById('jumbotron'));
ReactDOM.render(<Tabel />, document.getElementById('table'));
ReactDOM.render(<Carde />, document.getElementById('card'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
