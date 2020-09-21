import React, { useContext } from 'react';
import { MDBNavbar, MDBNavbarBrand } from 'mdbreact'
import { Store } from '../reducer/index'


const Header = () => {
    const {state} = useContext(Store)

    return (
        <MDBNavbar className='fixed-top justify-content-center text-white z-depth-0' color='unique-color'>
            <MDBNavbarBrand>第一回！{state.title}選手権！！！</MDBNavbarBrand>
        </MDBNavbar>
    )
}

export default Header