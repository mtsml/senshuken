import React from 'react'
import { BrowserRouter, Route } from "react-router-dom";

import Answer from './Answer/Answer'
import Detail from './Detail/Detail'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Top from './Top/Top'
import Result from './Result/Result'


export default class Router extends React.Component {
    render () {
        return (
            <>
                <Header/>
                <BrowserRouter>
                    <Route exact path="/" component={Top}></Route>
                    <Route exact path="/detail/:id" component={Detail}></Route>
                    <Route exact path="/result/:id" component={Result}></Route>
                    <Route exact path="/answer" component={Answer}></Route>
                </BrowserRouter>
                <Footer/>
            </>
        )
    }
}