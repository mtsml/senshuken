import React from 'react'
import ReactDOM from 'react-dom'
import "@fortawesome/fontawesome-free/css/all.min.css"
import "bootstrap-css-only/css/bootstrap.min.css"
import "mdbreact/dist/css/mdb.css"
import Router from './container/Router.js'
import { Provider } from './reducer/index'


ReactDOM.render(
    <Provider>
        <Router />
    </Provider>,
    document.getElementById('root')
)