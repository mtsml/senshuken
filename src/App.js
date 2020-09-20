import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header'
import Senshuken from './Senshuken'
import Question from './Question'

const App = () => {
    return (
        <>
            <Router>
                <Header />
                <Route exact path='/' component={Senshuken}/>
                <Route path='/senshuken/:senshuken_id' component={Question}/>
            </Router>
        </>
    )
}

export default App