import React from 'react'
import {MDBContainer} from 'mdbreact'
import Button from '../../components/Button'
import {getSenshuken2} from '../../api/api'



class Result extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            question: 'サンプル問題',
            answer: 'サンプル答え'
            // title: 'サンプルタイトル',
            // desc: 'サンプル説明'
        }
    }

    // componentDidMount() {
    //     this.getSenshuken2()
    // }

    // async getSenshuken2() {
    //     // const data = await getSenshuken(1)
    //     const data = await getSenshuken2(this.props.match.params.id)
    //     console.log(data)
    //     this.setState({
    //         // question2: 2,
    //         // answer2: 3
    //         question2: data.senshuken2.question,
    //         answer2: data.senshuken2.answer
    //     })
    // }

    render() {
        const senshuken2s = [
            {id: 1, question: 'クイズ1-1', answer: 'クイズ1-1の答え', senshuken_id: 1},
            {id: 2, question: 'クイズ1-2', answer: 'クイズ1-2の答え', senshuken_id: 1},
            {id: 3, question: 'クイズ1-3', answer: 'クイズ1-3の答え', senshuken_id: 1},
            {id: 4, question: 'クイズ1-4', answer: 'クイズ1-4の答え', senshuken_id: 1},
            {id: 5, question: 'クイズ1-5', answer: 'クイズ1-5の答え', senshuken_id: 1},
            {id: 6, question: 'クイズ1-6', answer: 'クイズ1-6の答え', senshuken_id: 1},
        ]
        // const senshuken2s = ['クイズ1-1','クイズ1-2']
        return (
            <MDBContainer className='text-center'>
                <div>{senshuken2s.map(function(senshuken2) {
                    return <p>{senshuken2.id}</p>})
    
                /* <h1>{this.state.question2}の結果</h1>
                <p>{this.state.answer2}</p>
                <Button message='start' /> */}</div>
            </MDBContainer>
        )
    }
}

export default Result