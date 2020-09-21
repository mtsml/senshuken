import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Button, Container, MDBIcon } from 'mdbreact'
import Footer from './Footer'


const Detail = (props) => {
    const [senshuken, setSenshuken] = useState(null)

    useEffect(() => {
        getSenshuken()
        },[]
    )

    const getSenshuken = () => {
        axios.get(`/senshuken/${props.match.params.senshuken_id}`)
            .then(response => setSenshuken(response.data.senshuken))
            .catch((err) => alert(err))
    }

    return (
        <>
            {senshuken!==null &&
                <>
                    <Container className='my-5 pt-4 pb-5'>
                        <h2>第一回！{senshuken.title}選手権！！！</h2>
                        <p>{senshuken.description}</p>
                    </Container>
                    <Footer>
                        <button 
                            className='btn px-3 py-2' 
                            style={{backgroundColor: '#3F729B'}}
                        >
                            <Link to={`/senshuken/${senshuken.senshuken_id}/question`}>
                                挑戦する
                            </Link>
                        </button>
                    </Footer>
                </>
            }
        </>
    )
}

export default Detail