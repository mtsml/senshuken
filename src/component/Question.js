import React from 'react';
import { Container } from 'mdbreact'

const Question = (props) => {
    const item = props.item
    return (
        <Container>
            <p>
                {item.text}
            </p>
            {item.type==='SA' && 
                <ul>
                    {item.options.map(option => <li>{option}</li>)}
                </ul>
            }
        </Container>
    )
}

export default Question