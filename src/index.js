import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from "react-router-dom";

import App from './App'
import Detail from './Detail'

import "@fortawesome/fontawesome-free/css/all.min.css"
import "bootstrap-css-only/css/bootstrap.min.css"
import "mdbreact/dist/css/mdb.css"
import "./css/senshuken.css"


ReactDOM.render(
    <Router>
        <Route exact path="/" component={App}></Route>
        <Route exact path="/detail/:id" component={Detail}></Route>
    </Router>,
    document.getElementById('root')
)