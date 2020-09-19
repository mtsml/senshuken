const express = require("express")
const path = require('path')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'build')))
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

const questions = [
    {
        id: 1,
        type: 'SA',
        text: '無線で発信される遭難信号のうち、即時の救助を要する際に3回繰り返される言葉は何か。',
        choices: [
            { key: 1, value: 'SOS' }, 
            { key: 2, value: 'メーデー' }, 
            { key: 3, value: 'パンパン' }, 
            { key: 4, value: 'エマージェンシー' }
        ]
    },
    {
        id: 2,
        type: 'SA',
        text: '民間機の遭難通信を行う周波数として適切なものはどれか。',
        choices: [
            { key: 1, value: '121.5MHz' }, 
            { key: 2, value: '123.5MHz' }, 
            { key: 3, value: '134.5MHz' }, 
            { key: 4, value: '136.5MHz' }
        ]
    },
    {
        id: 3,
        type: 'SA',
        text: '航空機が自らの動力で地上を移動することを何というか。',
        choices: [
            { key: 1, value: 'タキシング' }, 
            { key: 2, value: 'モービング' }, 
            { key: 3, value: 'ランニング' }, 
            { key: 4, value: 'スケーリング' }
        ]
    }
]

const answers = [
    {
        id: 1,
        correct: 1,
        text: 'id1の正解のテキストですよー'
    },
    {
        id: 2,
        correct: 2,
        text: 'id2の正解のテキストですよー'
    },
    {
        id: 3,
        correct: 3,
        text: 'id3の正解のテキストですよー'
    }
]

app.get('/questions', (req, res) => {
    console.log('/questions')
    res.json({questions: questions})
})

app.post('/answer/:id', (req, res) => {
    console.log('/answer')
    const id = req.params.id
    const choice = req.body.choice
    const answer = answers[id-1]
    res.json({answer: {...answer, result: answer.correct===choice}})
})

server = app.listen(port)