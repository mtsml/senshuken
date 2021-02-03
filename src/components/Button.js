import React from 'react'

export default class Button extends React.Component {
  handleToAboutPage = () => {
  this.props.history.push(this.props.link)
  }

    render() {
      const css = `btn-stitch ${this.props.color}`

        return (
            <button className={css} onClick={this.handleToAboutPage}>
                {this.props.message}
            </button>
        )
    }
}
