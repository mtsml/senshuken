import React from 'react'

import { Link } from "react-router-dom";


export default class Quiz extends React.Component {
    render() {
        return (
            <div className="content">
                <h2>
                    <Link to={`/detail/${this.props.quiz.id}`}>{this.props.quiz.name}</Link>
                </h2>

            </div>
        )
    }
}