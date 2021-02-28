import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Quiz = (props) => {
  const { quiz } = props;
  return (
    <div className="content">
      <h2>
        <Link to={`/detail/${quiz.id}`}>{quiz.name}</Link>
      </h2>
    </div>
  );
};

Quiz.propTypes = {
  quiz: PropTypes.shape(PropTypes.shape(PropTypes.string)),
};

Quiz.defaultProps = {
  quiz: {},
};

export default Quiz;
