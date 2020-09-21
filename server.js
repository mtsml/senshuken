const express = require("express")
const path = require('path')
const bodyParser = require('body-parser')
const { Client } = require('pg');

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'build')))
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

const pgConnect = () => {
    return new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
    }
})}

app.get('/senshuken', async (req, res) => {
    console.log('/senshuken')
    let senshukens = []

    const client = pgConnect()
    await client.connect()
        .then(() => client.query('SELECT * FROM senshuken;'))
        .then((res) => senshukens = res.rows)
        .catch((err) => console.log(err))
        .finally(() => client.end())

    res.json({senshukens})
})

app.get('/senshuken/:senshuken_id', async (req, res) => {
    console.log('/senshuken/:senshuken_id')
    let senshuken = {}

    const client = pgConnect()
    await client.connect()
        .then(() => client.query(`SELECT * FROM senshuken WHERE senshuken_id = ${req.params.senshuken_id};`))
        .then((res) => senshuken = res.rows[0])
        .catch((err) => console.log(err))
        .finally(() => client.end())

    res.json({senshuken})
})

app.get('/senshuken/:senshuken_id/question', async (req, res) => {
    console.log('/senshuken/:senshuken_id/question')
    let questions = []

    const client = pgConnect()
    await client.connect()
        .then(() => client.query(`
            SELECT
                question_id
                ,type
                ,question_text
                ,(SELECT array_agg(value ORDER BY choice_id ASC) FROM choice c WHERE c.senshuken_id = q.senshuken_id AND c.question_id = q.question_id) AS choices
            FROM question q
            WHERE senshuken_id = ${req.params.senshuken_id};`))
        .then((res) => questions = res.rows)
        .catch((err) => console.log(err))
        .finally(() => client.end())

    res.json({questions})
})

app.get('/senshuken/:senshuken_id/question/:question_id', async (req, res) => {
    console.log('/senshuken/:senshuken_id/question/:question_id')
    let answer = {}
    const senshuken_id = req.params.senshuken_id
    const question_id = req.params.question_id
 
    const client = pgConnect()
    await client.connect()
        .then(() => client.query(`
            SELECT
                answer_text
                ,(SELECT array_agg(value ORDER BY answer_id ASC) FROM answer WHERE senshuken_id = ${senshuken_id} AND question_id = ${question_id}) AS answers
            FROM
                question
            WHERE
                senshuken_id = ${senshuken_id}
                AND question_id = ${question_id}
            ;
        `))
        .then((res) => answer = res.rows[0])
        .catch((err) => console.log(err))
        .finally(() => client.end())

    res.json({...answer})
})

server = app.listen(port)