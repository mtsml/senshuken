import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios'
import { Button, Container, MDBIcon } from 'mdbreact'
import Footer from './Footer'
import SSKSpinner from '../component/SSKSpinner'
import { changeStatus, setState } from '../util/index'
import { Store } from '../reducer/index'


const Question = (props) => {
    const [questions, setQuestions] = useState([])
    const [activeQuestion, setActiveQuestion] = useState(0)
    const {state, dispatch} = useContext(Store);

    useEffect(() => {
        getQuestions()
        },[]
    )

    const getQuestions = () => {
        const senshuken_id = props.match.params.senshuken_id
        changeStatus(dispatch, 2)
        setState(dispatch, 'senshuken_id', senshuken_id)
        axios.get(`/senshuken/${senshuken_id}/question`)
            .then(response => setQuestions(response.data.questions))
            .then(() => changeStatus(dispatch, 1))
            .catch((err) => alert(err))
    }

    const answerQuestion = async (question_id, choice_id) => {
        await axios.get(`/senshuken/${state.senshuken_id}/question/${question_id}`)
            .then(response => {
                const answer_text = response.data.answer_text
                const answers = response.data.answers
                const newState = questions.map(question => (
                    question.question_id===question_id
                        ?{
                            ...question, 
                            selected_choice_id: choice_id, 
                            answered: true, 
                            answer_text,
                            answers
                        }
                        :question
                ))
                setQuestions(newState)
            })
            .catch((err) => alert(err))
    }

    return (
        <>
            <Container className='my-5 pt-4 pb-5'>
                {state.status===1
                    ?questions.length!==0 && 
                        <>
                            <h5>
                                {questions[activeQuestion].question_text}
                            </h5>
                            {questions[activeQuestion].type==='SA' && questions[activeQuestion].choices.map((choice, idx) => {
                                return(
                                    <Button 
                                        color={
                                            questions[activeQuestion].answered
                                                ? questions[activeQuestion].answers.includes(idx+1+'')
                                                    ? 'success'
                                                    : idx+1===questions[activeQuestion].selected_choice_id
                                                        ?'danger'
                                                        : 'white'
                                                :'white'
                                        }
                                        className='d-block p-2 mb-2'
                                        disabled={questions[activeQuestion].answered}
                                        style={{width: '100%'}}
                                        onClick={() => answerQuestion(questions[activeQuestion].question_id, idx+1)}
                                    >
                                        {choice}
                                    </Button>
                                )
                            })}
                            {questions[activeQuestion].answered && 
                                <>
                                    <h4>
                                        {questions[activeQuestion].answers.includes(questions[activeQuestion].selected_choice_id+'')
                                            ? <span className='text-success'><strong>正解！</strong></span>
                                            : <span className='text-danger'><strong>残念！</strong></span>
                                        }
                                    </h4>
                                    <h5>
                                        {questions[activeQuestion].answer_text}
                                    </h5>
                                </>
                            }
                        </>
                    :<SSKSpinner />
                }
            </Container>
            {state.status===1 && questions.length!==0 &&
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
            }
        </>
    )
}

export default Question