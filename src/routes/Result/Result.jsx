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
  for (let i = 0; i < senshukens.length; i++) {
    if (senshukens[i].answer === true) {
      trueCnt++;
    }
  }
  return trueCnt;
}

const Result = () => (
  <MDBContainer className="text-center">
    <div>
      {calScore(SENSHUKEN)} / {SENSHUKEN.length}
    </div>
  </MDBContainer>
);

export default Result;
