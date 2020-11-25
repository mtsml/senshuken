import React from 'react'
import { MDBContainer } from 'mdbreact'

import Button from './component/Button'
// import { getSenshuken } from './api/api'


class Quiz extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: 'サンプルタイトル',
            desc: 'サンプル説明'
        }
    }

    // componentDidMount() {
    //     this.getSenshuken()
    // }
    //
    // async getSenshuken() {
    //     const data = await getSenshuken(this.props.match.params.id)
    //     this.setState({
    //         title: data.senshuken.name,
    //         desc: data.senshuken.desc
    //     })
    // }


    render() {
      console.log(this.props.match.params.senshuken_id);
      console.log(this.props.match.params.quiz_id);
        return (
            <MDBContainer className='text-center'>
                <h1>Quiz</h1>
                <p>Quiz2</p>
                <Button message='start' />
            </MDBContainer>
        )
    }
}

export default Quiz
