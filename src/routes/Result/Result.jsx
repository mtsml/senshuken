import React from 'react';
import { MDBContainer } from 'mdbreact';
import Button from '../../components/Button';
import PropTypes from 'prop-types';

const SENSHUKEN = [
  {
    id: 1, question: 'クイズ1-1', answer: false, senshuken_id: 1,
  },
  {
    id: 2, question: 'クイズ1-2', answer: false, senshuken_id: 1,
  },
  {
    id: 3, question: 'クイズ1-3', answer: true, senshuken_id: 1,
  },
  {
    id: 4, question: 'クイズ1-4', answer: true, senshuken_id: 1,
  },
  {
    id: 5, question: 'クイズ1-5', answer: true, senshuken_id: 1,
  },
  {
    id: 6, question: 'クイズ1-6', answer: true, senshuken_id: 1,
  },
];

const calScore = (senshukens) => {
  let trueCnt = 0;
  for (let i = 0; i < senshukens.length; i += 1) {
    if (senshukens[i].answer === true) {
      trueCnt += 1;
    }
  }
  return trueCnt;
};

import { PieChart } from 'react-minimal-pie-chart';



const Result = (props) => {
  const trueCnt = calScore(SENSHUKEN);
  const totalCnt = SENSHUKEN.length;
  const { history } = props;

  return (
    <MDBContainer className="text-center">
      <div className="mb-5">
        <PieChart
          animate={true}
          animationDuration={1000}
          startAngle={270}
          data={[{ value: trueCnt, color: '#58ac9f' }]}
          totalValue={SENSHUKEN.length}
          lineWidth={20}
          label={({ dataEntry }) => dataEntry.value + '/' + totalCnt }
          labelStyle={{
            fontSize: '25px',
            fontFamily: 'sans-serif',
            fill: '#66484b',
          }}
          labelPosition={0}
        />
      </div>
      <Button message="Topに戻る" link="/" history={history} color="btn-stitch-green" />
    </MDBContainer>
)};

export default Result;

Result.propTypes = {
  history: PropTypes.arrayOf(PropTypes.string),
};

Result.defaultProps = {
  history: [],
};
