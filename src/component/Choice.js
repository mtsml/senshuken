import React from 'react'
import { Button } from 'mdbreact'

const Choice = (props) => {
    const choice = props.choice
    return (
        <Button className='d-block p-2' style={{width: '100%'}}>
            {choice}
        </Button>
    )
}

export default Choice