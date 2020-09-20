import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Card, Container } from 'mdbreact'


const Senshuken = () => {
    const [senshukens, setSenshukens] = useState([])

    useEffect(() => {
        getSenshukens()
        },[]
    )

    const getSenshukens = () => {
        axios.get('/senshuken')
            .then(response => setSenshukens(response.data.senshukens))
            .catch((err) => alert('深刻なエラーが発生しました。。。'))
    }

    return (
        <Container className='mt-5'>
            {senshukens.length!==0 && senshukens.map(senshuken => (
                <Link to={`/senshuken/${senshuken.senshuken_id}`} className='text-clear'>
                    <Card className='mb-3 p-3'>
                        <h2>
                            {`第一回！${senshuken.title}選手権！！！`}
                        </h2>
                        <p>
                            {senshuken.description}
                        </p>
                    </Card>
                </Link>
            ))}
        </Container>
    )
}

export default Senshuken