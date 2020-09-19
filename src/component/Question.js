import React from 'react';
import { Container } from 'mdbreact'
import Choice from './Choice'

const Question = (props) => {
    const { item, selectChoice, answered, correct } = props
    return (
        <Container>
            <p>
                {item.text}
            </p>
            {item.type==='SA' && item.choices.map(choice => {
                const color = answered && choice.key===correct ? 'success' : 'white'
                return(
                    <Choice 
                        text={choice.value} 
                        onClick={() => selectChoice(item.id, choice.key)}
                        disabled={answered}
                        color={color}
                    />
                )
            })}
        </Container>
    )
}

export default Question