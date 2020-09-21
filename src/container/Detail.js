import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Container } from 'mdbreact'
import Footer from './Footer'
import SSKSpinner from '../component/SSKSpinner'
import { changeStatus, setState } from '../util/index'
import { Store } from '../reducer/index'


const Detail = (props) => {
    const [senshuken, setSenshuken] = useState(null)
    const {state, dispatch} = useContext(Store);

    useEffect(() => {
        getSenshuken()
        },[]
    )

    const getSenshuken = () => {
        changeStatus(dispatch, 2)
        axios.get(`/senshuken/${props.match.params.senshuken_id}`)
            .then(response => {setSenshuken(response.data.senshuken);setState(dispatch, 'title', response.data.senshuken.title)})
            .then(() => changeStatus(dispatch, 1))
            .catch((err) => alert(err))
    }

    return (
        <>
            <Container className='my-5 pt-4 pb-5'>
                {state.status===1
                    ?senshuken!==null &&
                        <>
                            <h2 className='text-center'>第一回！{senshuken.title}選手権！！！</h2>
                            <p>{senshuken.description}</p>
                        </>
                    :<SSKSpinner />
                }
            </Container>
            {state.status===1 && senshuken!==null &&
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
            }
        </>
    )
}

export default Detail