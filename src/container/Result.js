import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'mdbreact'
import Footer from './Footer'
import { Store } from '../reducer/index'


const Result = () => {
    const {state} = useContext(Store);

    return (
        <>
            <Container className='my-5 pt-4 pb-5'>
                <h2 className='text-center'>
                    おめでとう！あなたは{state.title}王だ！
                </h2>
            </Container>
            <Footer>
                <button 
                    className='btn px-3 py-2' 
                    style={{backgroundColor: '#3F729B'}}
                >
                    <Link to='/'>
                        TOPに戻る
                    </Link>
                </button>
            </Footer>
        </>
    )
}

export default Result