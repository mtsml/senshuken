import React from 'react'
import { BrowserRouter, Route } from "react-router-dom";

import Body from './Body'
import Detail from './Detail'
import Quiz from './Quiz'


export default class Router extends React.Component {
    render () {
        return (
            <BrowserRouter>
                <Route exact path="/" component={Body}></Route>
                <Route exact path="/detail/:id" component={Detail}></Route>
                <Route exact path="/detail/:senshuken_id/quiz/:quiz_id" component={Quiz}></Route>
            </BrowserRouter>
        )
    }
}
