import React from 'react'
import { MDBBtn } from "mdbreact";


export default class Button extends React.Component {
    render() {
        return (
            <MDBBtn 
            color="secondary"
            outline
        >
            {this.props.message}
        </MDBBtn>
        )
    }
}

