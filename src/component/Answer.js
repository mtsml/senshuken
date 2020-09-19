import React from 'react'
import { Container } from 'mdbreact'

const Answer = (props) => {
    const { text, result } = props.answer
    return (
        <Container>
            <p>
                {result
                    ? '正解！'
                    : '残念！'
                }
            </p>
            <p>
                {text}
            </p>
        </Container>
    )
}

export default Answer