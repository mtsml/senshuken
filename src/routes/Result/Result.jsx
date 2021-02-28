import React from 'react';
import { MDBContainer } from 'mdbreact';

const SENSHUKEN = [
  {
    id: 1, question: 'クイズ1-1', answer: 'クイズ1-1の答え', senshuken_id: 1,
  },
  {
    id: 2, question: 'クイズ1-2', answer: 'クイズ1-2の答え', senshuken_id: 1,
  },
  {
    id: 3, question: 'クイズ1-3', answer: 'クイズ1-3の答え', senshuken_id: 1,
  },
  {
    id: 4, question: 'クイズ1-4', answer: 'クイズ1-4の答え', senshuken_id: 1,
  },
  {
    id: 5, question: 'クイズ1-5', answer: 'クイズ1-5の答え', senshuken_id: 1,
  },
  {
    id: 6, question: 'クイズ1-6', answer: 'クイズ1-6の答え', senshuken_id: 1,
  },
];

const Result = () => (
  <MDBContainer className="text-center">
    <div>
      {SENSHUKEN.map((senshuken2) => <p>{senshuken2.id}</p>)}
    </div>
  </MDBContainer>
);

export default Result;
