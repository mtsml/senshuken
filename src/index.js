import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css"
import "bootstrap-css-only/css/bootstrap.min.css"
import "mdbreact/dist/css/mdb.css"
import "./css/senshuken.css"
import App from './App'
import Detail from './Detail'


ReactDOM.render(
    <Router>
        <Route exact path="/" component={App}></Route>
        <Route exact path="/detail/:id" component={Detail}></Route>
    </Router>,
    document.getElementById('root')
)
