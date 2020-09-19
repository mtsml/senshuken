import React from 'react'
import { Button } from 'mdbreact'

const Choice = (props) => {
    const { text, onClick, disabled, color } = props
    return (
        <Button 
            className='d-block p-2 mb-2'
            color={color}
            disabled={disabled}
            style={{width: '100%'}}
            onClick={onClick}
        >
            {text}
        </Button>
    )
}

export default Choice