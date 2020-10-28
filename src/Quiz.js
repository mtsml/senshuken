import React from 'react'
import { Link } from "react-router-dom";


export default class Quiz extends React.Component {
    render() {
        return (
            <div>
                <h2>
                    <Link to={`/detail/${this.props.quiz.id}`}>{this.props.quiz.name}</Link>
                </h2>
                <p>{this.props.quiz}の説明です</p>
                <button href="#" class="btn-stitch">BUTTON</button>
            </div>
        )
    }
} 
