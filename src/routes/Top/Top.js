import React from 'react'

import Quiz from './Quiz'
import { getSenshukens } from '../../api/api'


export default class Top extends React.Component {
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
        this.setState({senshukens: data.senshuken})
    }

    render() {
        return (
            <div className='center'>
                {this.state.senshukens.map(function(quiz) {
                    return (
                        <Quiz quiz={quiz} />
                    )
                })}
            </div>
        )
    }
}