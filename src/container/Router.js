import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header'
import Detail from './Detail'
import Senshuken from './Senshuken'
import Question from './Question'
import Result from './Result'


const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Route exact path='/' component={Senshuken}/>
            <Route exact path='/senshuken/:senshuken_id' component={Detail}/>
            <Route path='/senshuken/:senshuken_id/question' component={Question}/>
            <Route path='/senshuken/:senshuken_id/result' component={Result}/>
        </BrowserRouter>
    )
}

export default Router