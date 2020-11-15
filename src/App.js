import React from 'react'

import Footer from './Footer'
import Header from './Header'
import Router from './Router'


class App extends React.Component {
    render() {
        return (
            <>
                <Header />
                <Router />
                <Footer />
            </>
        )
    }
}

export default App