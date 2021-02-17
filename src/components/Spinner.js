import React from 'react';

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

Spinner.defaultProps = {
  color: '#3F729B',
  width: '4rem',
  height: '4rem',
};

export default Spinner;
