import React from 'react';
import { Container } from 'mdbreact'
import Content from './component/Content'

const items = [
    {
        type: 'SA',
        text: '無線で発信される遭難信号のうち、即時の救助を要する際に3回繰り返される言葉は何か。',
        options: ['SOS', 'メーデー', 'パンパン', 'エマージェンシー']
    },
    {
        type: 'SA',
        text: '民間機の遭難通信を行う周波数として適切なものはどれか。',
        options: ['121.5MHz', '123.5MHz', '134.5MHz', '136.5MHz']
    },
    {
        type: 'SA',
        text: '航空機が自らの動力で地上を移動することを何というか。',
        options: ['タキシング', 'モービング', 'ランニング', 'スケーリング']
    }
]

const Body = () => {
    return (
        <Container className='mt-5'>
            {items.map(item => <Content item={item} />)}
        </Container>        
    )
}

export default Body