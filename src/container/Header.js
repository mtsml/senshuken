import React from 'react';
import { MDBNavbar, MDBNavbarBrand } from 'mdbreact'

const Header = () => {
    return (
        <MDBNavbar className='fixed-top justify-content-center text-white z-depth-0' color='unique-color'>
            <MDBNavbarBrand>第一回！〇〇選手権！！！</MDBNavbarBrand>
        </MDBNavbar>
    )
}

export default Header