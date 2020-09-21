import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Button, Card, Container, MDBIcon } from 'mdbreact'

const Question = (props) => {
    const [questions, setQuestions] = useState([])
    const [activeQuestion, setActiveQuestion] = useState(0)

    useEffect(() => {
        getQuestions()
        },[]
    )

    const getQuestions = () => {
        axios.get(`/senshuken/${props.match.params.senshuken_id}`)
            .then(response => setQuestions(response.data.questions))
            .catch((err) => alert(err))
    }

    // const postAnswer = (id, choice) => {
    //     axios.post(`/answer/${id}`, {choice: choice})
    //         .then(response => {
    //             const newState = items.map(item => {
    //                 if(item.id === id) {
    //                     return ({
    //                         ...item,
    //                         answer: response.data.answer
    //                     })
    //                 } else {
    //                     return item
    //                 }
    //             })
    //             setItems(newState)
    //         })
    //         .catch((err) => {alert('深刻なエラーが発生しました。。。');alert(err)})
    // }

    return (
        <Container className='mt-5'>
            {questions.length!==0 && <>
                <Card className='mb-3 p-3'>
                    <Container>
                        <p>
                            {questions[activeQuestion].question_text}
                        </p>
                        {questions[activeQuestion].type==='SA' && questions[activeQuestion].choices.map(choice => {
                            return(
                                <Button 
                                    className='d-block p-2 mb-2'
                                    style={{width: '100%'}}
                                >
                                    {choice}
                                </Button>
                            )
                        })}
                    </Container>
                </Card>
                <div className='text-center'>
                    <Button 
                        className='px-3 py-2 mr-3'
                        disabled={activeQuestion===0}
                        onClick={() => setActiveQuestion(activeQuestion-1)}
                    >
                        <MDBIcon icon="angle-left" size='2x'/>
                    </Button>
                    <Button 
                        className='px-3 py-2 ml-3' 
                        disabled={activeQuestion===questions.length-1}
                        onClick={() => setActiveQuestion(activeQuestion+1)}
                    >
                        <MDBIcon icon="angle-right" size='2x'/>
                    </Button>
                </div>
            </>}
        </Container>
    )
}

export default Question