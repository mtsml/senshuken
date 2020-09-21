import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header'
import Senshuken from './Senshuken'
import Question from './Question'

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Route exact path='/' component={Senshuken}/>
            <Route path='/senshuken/:senshuken_id' component={Question}/>
        </BrowserRouter>
    )
}

export default Router