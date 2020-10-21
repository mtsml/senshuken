import React from 'react'
import Quiz from './Quiz'


export default class Body extends React.Component {
    render() {
        const quizes = ['クイズA','クイズB','クイズC']
        return (
            <div className='center'>
                {quizes.map(function(quiz) {
                    return (
                        <Quiz quiz={quiz} />
                    )
                })}
            </div>
        )
    }
} 