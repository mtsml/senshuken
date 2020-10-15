import React from 'react'
import { getSenshukens } from './api/api'


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            senshukens: []
        }
    }

    componentDidMount() {
        this.getSenshukens()
    }

    async getSenshukens() {
        const data = await getSenshukens()
        console.log(data)
        this.setState({senshukens: data.senshuken})
    }

    render() {
        const { senshukens } = this.state
        console.log(senshukens)
        return (
            <>
                <h1>title</h1>
                <p>contents</p>
                {
                    senshukens && senshukens.map(
                        senshuken => <p>{senshuken}</p>
                    )
                }
            </>
        )
    }
}

export default App