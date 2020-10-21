import React from 'react'

export default class Quiz extends React.Component {
    render() {
        return (
            <div>
                <h2>
                    <a href="">{this.props.quiz}</a>
                </h2>
                <p>{this.props.quiz}の説明です</p>
                <button>ボタンです</button>
            </div>
        )
    }
} 