import React from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />,

    // document.addEventListener('DOMContentLoaded', function () {
    //     var elems = document.querySelectorAll('.modal');
    //     var instances = M.Modal.init(elems, options);
    // }),

    document.getElementById('root'));
registerServiceWorker();
