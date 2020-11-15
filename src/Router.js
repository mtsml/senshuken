import React from 'react'
import { BrowserRouter, Route } from "react-router-dom";

import Body from './Body'
import Detail from './Detail'


export default class Router extends React.Component {
    render () {
        return (
            <BrowserRouter>
                <Route exact path="/" component={Body}></Route>
                <Route exact path="/detail/:id" component={Detail}></Route>
            </BrowserRouter>
        )
    }
}