import React from 'react';
import { MDBContainer } from 'mdbreact';
import PropTypes from 'prop-types';
import Button from '../../components/Button';

class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'サンプルタイトル',
      desc: 'サンプル説明',
      answer: '',
    };
  }

  componentDidMount() {
    this.getSenshuken();
  }

  async getSenshuken() {
    // const data = await getSenshuken(this.props.match.params.id)
    this.setState({
      title: '第1問',
      desc: 'これはなんでしょう？',
    });
  }

  judge(item) {
    let answer = '×'
    if (item == 'A:いぬ'){
      answer = '○'
    }
    this.setState({
      answer: answer
    });
  }

  render() {
    const answerlist = ['A:いぬ', 'B:ねこ', 'C:ぱんだ'];
    const list = [];
    const { title, desc, answer } = this.state;
    const { history } = this.props;
    for (let i = 0; i < answerlist.length; i += 1) {
      list.push(
        <div className="answer-btn" key={i}>
          <button className="btn-stitch btn-stitch-gray" type="submit" onClick={() => this.judge(answerlist[i])}>
            {answerlist[i]}
          </button>
        </div>,
      );
    }
    return (
      <MDBContainer className="text-center">
        <h1>{title}</h1>
        <p>{desc}</p>
        <div className="center">
          {list}
        </div>
        <br />
        <br />
        <br />
        <br />
        <h1>{answer}</h1>
        <Button message="next" link="/" history={history} color="btn-stitch-green" />
      </MDBContainer>
    );
  }
}
Answer.propTypes = {
  history: PropTypes.arrayOf(PropTypes.string),
};

Answer.defaultProps = {
  history: [],
};
export default Answer;
