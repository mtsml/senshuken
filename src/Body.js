import React, { useState } from 'react';
import { Button, Container, MDBIcon } from 'mdbreact'
import Content from './component/Content'

const _items = [
    {
        type: 'SA',
        text: '無線で発信される遭難信号のうち、即時の救助を要する際に3回繰り返される言葉は何か。',
        choices: ['SOS', 'メーデー', 'パンパン', 'エマージェンシー']
    },
    {
        type: 'SA',
        text: '民間機の遭難通信を行う周波数として適切なものはどれか。',
        choices: ['121.5MHz', '123.5MHz', '134.5MHz', '136.5MHz']
    },
    {
        type: 'SA',
        text: '航空機が自らの動力で地上を移動することを何というか。',
        choices: ['タキシング', 'モービング', 'ランニング', 'スケーリング']
    }
]

const Body = () => {
    const [items, setItems] = useState(_items)
    const [activeItem, setActiveItem] = useState(0)

    return (
        <Container className='mt-5'>
            <Content 
                item={items[activeItem]}
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
        </Container>
    )
}

export default Body