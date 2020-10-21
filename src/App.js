import React from 'react'

import Body from './Body'
import Footer from './Footer'
import Header from './Header'



class App extends React.Component {
    render() {
        return (
            <>
                <Header />
                <Body />
                <Footer />
            </>
        )
    }
}

export default App