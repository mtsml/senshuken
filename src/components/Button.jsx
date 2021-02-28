import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
  handleToAboutPage() {
    const { link, history } = this.props;
    history.push(link);
  }

  render() {
    const { color, message } = this.props;
    const css = `btn-stitch ${color}`;
    return (
      <button type="button" className={css} onClick={() => this.handleToAboutPage()}>
        {message}
      </button>
    );
  }
}

Button.propTypes = {
  link: PropTypes.string,
  history: PropTypes.arrayOf(PropTypes.string),
  color: PropTypes.string,
  message: PropTypes.string,
};

Button.defaultProps = {
  link: '/',
  history: [],
  color: 'btn-stitch-green',
  message: '',
};
