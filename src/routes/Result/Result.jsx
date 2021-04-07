import React from 'react';
import { MDBContainer } from 'mdbreact';

const SENSHUKEN = [
  {
    id: 1, question: 'クイズ1-1', answer: true, senshuken_id: 1,
  },
  {
    id: 2, question: 'クイズ1-2', answer: true, senshuken_id: 1,
  },
  {
    id: 3, question: 'クイズ1-3', answer: true, senshuken_id: 1,
  },
  {
    id: 4, question: 'クイズ1-4', answer: true, senshuken_id: 1,
  },
  {
    id: 5, question: 'クイズ1-5', answer: false, senshuken_id: 1,
  },
  {
    id: 6, question: 'クイズ1-6', answer: false, senshuken_id: 1,
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



const Result = () => {
  const trueCnt = calScore(SENSHUKEN);
  const totalCnt = SENSHUKEN.length;

  return (
    <MDBContainer className="text-center">
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
    </MDBContainer>
)};

export default Result;
