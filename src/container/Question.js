import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Button, Card, Container, MDBIcon } from 'mdbreact'
import Footer from './Footer'


const Question = (props) => {
    const [questions, setQuestions] = useState([])
    const [activeQuestion, setActiveQuestion] = useState(0)

    useEffect(() => {
        getQuestions()
        },[]
    )

    const getQuestions = () => {
        axios.get(`/senshuken/${props.match.params.senshuken_id}/question`)
            .then(response => setQuestions(response.data.questions))
            .catch((err) => alert(err))
    }

    return (
        <>
            {questions.length!==0 && 
                <>
                    <Container className='my-5 pt-4 pb-5'>
                        <h5>
                            {questions[activeQuestion].question_text}
                        </h5>
                        {questions[activeQuestion].type==='SA' && questions[activeQuestion].choices.map(choice => {
                            return(
                                <Button 
                                    color='white'
                                    className='d-block p-2 mb-2'
                                    style={{width: '100%'}}
                                >
                                    {choice}
                                </Button>
                            )
                        })}
                    </Container>
                    <Footer>
                        <button 
                            className='btn px-3 py-2 mr-3'
                            style={{backgroundColor: '#3F729B'}}
                            disabled={activeQuestion===0}
                            onClick={() => setActiveQuestion(activeQuestion-1)}
                        >
                            <MDBIcon icon="angle-left" size='2x'/>
                        </button>
                        <button 
                            className='btn px-3 py-2 ml-3' 
                            style={{backgroundColor: '#3F729B'}}
                            disabled={activeQuestion===questions.length-1}
                            onClick={() => setActiveQuestion(activeQuestion+1)}
                        >
                            <MDBIcon icon="angle-right" size='2x'/>
                        </button>
                    </Footer>
                </>
            }
        </>
    )
}

export default Question