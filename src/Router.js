import React from 'react'
import { BrowserRouter, Route } from "react-router-dom";

import Body from './Body'
import Detail from './Detail'
import Result from './Result'
import Answer from './Answer'


export default class Router extends React.Component {
    render () {
        return (
            <BrowserRouter>
                <Route exact path="/" component={Body}></Route>
                <Route exact path="/detail/:id" component={Detail}></Route>
                <Route exact path="/result/:id" component={Result}></Route>
                <Route exact path="/answer" component={Answer}></Route>
            </BrowserRouter>
        )
    }
}