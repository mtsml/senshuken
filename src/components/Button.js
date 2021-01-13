import React from 'react'

export default class Button extends React.Component {
  handleToAboutPage = () => {
  this.props.history.push(this.props.link)
  }

    render() {
        return (
            <button className='btn-stitch' onClick={this.handleToAboutPage}>
                {this.props.message}
            </button>
        )
    }
}
