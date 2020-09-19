import React from 'react'
import { Card } from 'mdbreact'
import Question from './Question'
import Answer from './Answer'

const Content = (props) => {
    const item = props.item
    return (
        <Card className='mb-3 p-3'>
            <Question item={item}/>
            {/* <Answer /> */}
        </Card>
    )
}

export default Content