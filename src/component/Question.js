import React from 'react';
import { Container } from 'mdbreact'
import Choice from './Choice'

const Question = (props) => {
    const item = props.item
    return (
        <Container>
            <p>
                {item.text}
            </p>
            {item.type==='SA' && item.choices.map(choice => <Choice choice={choice} />)}
        </Container>
    )
}

export default Question