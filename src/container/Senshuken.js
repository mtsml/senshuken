import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Card, Container } from 'mdbreact'
import { Store } from '../reducer/index'
import SSKSpier from '../component/SSKSpinner'
import { changeStatus } from '../util/index'


const Senshuken = () => {
    const [senshukens, setSenshukens] = useState([])
    const {state, dispatch} = useContext(Store);

    useEffect(() => {
        getSenshukens()
        },[]
    )

    const getSenshukens = () => {
        changeStatus(dispatch, 2)
        axios.get('/senshuken')
            .then(response => setSenshukens(response.data.senshukens))
            .then(() => changeStatus(dispatch, 1))
            .catch((err) => alert('深刻なエラーが発生しました。。。'))
    }

    return (
        <Container className='mt-5 pt-4'>
            {state.status===1
                ?senshukens.length!==0 && senshukens.map(senshuken => (
                    <Link to={`/senshuken/${senshuken.senshuken_id}`}>
                        <Card className='mb-3 p-3'>
                            <h3 className='text-center text-dark m-0'>
                                {`第一回！${senshuken.title}選手権！！！`}
                            </h3>
                        </Card>
                    </Link>
                ))
                :<SSKSpier />
            }
        </Container>
    )
}

export default Senshuken