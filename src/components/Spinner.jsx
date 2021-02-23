import React from 'react';
import PropTypes from 'prop-types';

const Spinner = (props) => {
  const { color, width, height } = props;

  return (
    <div className="text-center">
      <div
        className="spinner-border"
        role="status"
        style={{ color, width, height }}
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

Spinner.propTypes = {
  color: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

Spinner.defaultProps = {
  color: '#3F729B',
  width: '4rem',
  height: '4rem',
};

export default Spinner;
