import React from 'react';
import PropTypes from 'prop-types';
import { MDBContainer } from 'mdbreact';

import Button from '../../components/Button';
import { getSenshuken } from '../../api/api';

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'サンプルタイトル',
      desc: 'サンプル説明',
    };
  }

  componentDidMount() {
    this.getSenshuken();
  }

  async getSenshuken() {
    const { match } = this.props;
    const data = await getSenshuken(match.params.id);
    this.setState({
      title: data.senshuken.name,
      desc: data.senshuken.desc,
    });
  }

  render() {
    const { title, desc } = this.state;
    const { history } = this.props;

    return (
      <MDBContainer className="text-center">
        <h1>{title}</h1>
        <p>{desc}</p>
        <Button message="start" link="/Detail" history={history} />
      </MDBContainer>
    );
  }
}

Detail.propTypes = {
  history: PropTypes.arrayOf(PropTypes.string),
  match: PropTypes.shape(PropTypes.shape(PropTypes.string)),
};

Detail.defaultProps = {
  history: [],
  match: {},
};

export default Detail;
