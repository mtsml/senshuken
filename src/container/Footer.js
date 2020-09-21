import React from 'react'
import { MDBFooter } from 'mdbreact'


const Footer = (props) => {
    return (
        <MDBFooter className='fixed-bottom text-center p-3' color='white'>
            {props.children}
        </MDBFooter>
    )
}

export default Footer