import React from 'react'
import {MDBContainer} from 'mdbreact'
import Button from '../../components/Button'
import {getSenshuken} from '../../api/api'


class Answer extends React.Component {
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
        // const data = await getSenshuken(this.props.match.params.id)
        this.setState({
            title: '第1問',
            desc: 'これはなんでしょう？'
        })
    }

    render() {
        return (
            <MDBContainer className='text-center'>
                <h1>{this.state.title}</h1>
                <p>{this.state.desc}</p>
                <div className='center'>
                  <div className='answer-btn'>
                    <Button message='A:いぬ' />
                  </div>
                  <div className='answer-btn'>
                    <Button message='B:ねこ' />
                  </div>
                  <div className='answer-btn'>
                    <Button message='C:ぱんだ' />
                  </div>
                </div>
            </MDBContainer>
        )
    }
}

export default Answer
