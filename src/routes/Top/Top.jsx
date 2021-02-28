import React from 'react';

import Quiz from './Quiz';
import { getSenshukens } from '../../api/api';

export default class Top extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      senshukens: [],
    };
  }

  componentDidMount() {
    this.getSenshukens();
  }

  async getSenshukens() {
    const data = await getSenshukens();
    this.setState({ senshukens: data.senshuken });
  }

  render() {
    const { senshukens } = this.state;
    return (
      <div className="center">
        {senshukens.map((quiz) => (
          <Quiz quiz={quiz} />
        ))}
      </div>
    );
  }
}
