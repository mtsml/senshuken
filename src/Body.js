import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Button, Container, MDBIcon } from 'mdbreact'
import Content from './component/Content'

const Body = () => {
    const [items, setItems] = useState([])
    const [activeItem, setActiveItem] = useState(0)

    useEffect(() => {
        getItems()
        },[]
    )

    const getItems = () => {
        axios.get('/questions')
            .then(response => setItems(response.data.questions))
            .catch((err) => {alert('深刻なエラーが発生しました。。。');alert(err)})
    }

    const postAnswer = (id, choice) => {
        axios.post(`/answer/${id}`, {choice: choice})
            .then(response => {
                const newState = items.map(item => {
                    if(item.id === id) {
                        return ({
                            ...item,
                            answer: response.data.answer
                        })
                    } else {
                        return item
                    }
                })
                setItems(newState)
            })
            .catch((err) => {alert('深刻なエラーが発生しました。。。');alert(err)})
    }

    return (
        <Container className='mt-5'>
            {items.length!==0 && <>
                <Content 
                    item={items[activeItem]}
                    selectChoice={postAnswer}
                />
                <div className='text-center'>
                    <Button 
                        className='px-3 py-2 mr-3'
                        disabled={activeItem===0}
                        onClick={() => setActiveItem(activeItem-1)}
                    >
                        <MDBIcon icon="angle-left" size='2x'/>
                    </Button>
                    <Button 
                        className='px-3 py-2 ml-3' 
                        disabled={activeItem===items.length-1}
                        onClick={() => setActiveItem(activeItem+1)}
                    >
                        <MDBIcon icon="angle-right" size='2x'/>
                    </Button>
                </div>
            </>}
        </Container>
    )
}

export default Body