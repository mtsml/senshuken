import React from 'react'
import { MDBContainer } from 'mdbreact'

import {getSenshuken} from './api/api'
import { Link } from "react-router-dom"


class Detail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: 'サンプルタイトル',
            desc: 'サンプル説明'
        }
    }

    componentDidMount() {
        this.getSenshuken()
    }

    async getSenshuken() {
        const data = await getSenshuken(this.props.match.params.id)
        this.setState({
            title: data.senshuken.name,
            desc: data.senshuken.desc
        })
    }

    render() {
        return (
            <MDBContainer className='text-center'>
                <h1>{this.state.title}</h1>
                <p>{this.state.desc}</p>
                <Link to='/answer'>start</Link>
            </MDBContainer>
        )
    }
}

export default Detail
