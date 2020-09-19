import React from 'react'
import { Card } from 'mdbreact'
import Question from './Question'
import Answer from './Answer'

const Content = (props) => {
    const { item, selectChoice } = props
    const answered = item.answer!==null && item.answer!==undefined
    const correct = answered && item.answer.correct
    return (
        <Card className='mb-3 p-3'>
            <Question item={item} selectChoice={selectChoice} answered={answered} correct={correct} />
            {answered && <Answer answer={item.answer} />}
        </Card>
    )
}

export default Content