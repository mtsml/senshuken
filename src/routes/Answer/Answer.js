import React from 'react'
import {MDBContainer} from 'mdbreact'
import {getSenshuken} from '../../api/api'


class Answer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: 'サンプルタイトル',
            desc: 'サンプル説明',
            answer: ''
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
      const answer = ['A:いぬ','B:ねこ','C:ぱんだ'];
      const list = [];
      for (let i = 0; i < answer.length; i++) {
      list.push(
          <div className='answer-btn' key={i}>
            <button className='btn-stitch' onClick={() => this.setState({answer: "○"})}>
                {answer[i]}
            </button>
          </div>
        )
      }
        return (
            <MDBContainer className='text-center'>
                <h1>{this.state.title}</h1>
                <p>{this.state.desc}</p>
                <div className='center'>
                  {list}
                </div>
                <h1>{this.state.answer}</h1>
            </MDBContainer>
        )
    }
}

export default Answer
