const express = require('express')
const app = express()
const cors = require('cors')


const morgan = require('morgan')
morgan.token('body',  (req, res) =>  {
    if(req.method === 'POST'){
        return JSON.stringify(req.body)
    }
    return ''
})

app.use(cors())
app.use(express.static('build'))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))
app.use(express.json())




let persons = [
    {
        name: 'Arto Hellas',
        number: '040-123456',
        id: 1
    },
    {
        name: 'Ada Lovelace',
        number: '39-44-5323523',
        id: 2
    },
    {
        name: 'Dan Abramov',
        number: '12-43-234345',
        id: 3
    },
    {
        name: 'Mary Poppendick',
        number: '39-23-6423122',
        id: 4
    }
]

app.get('/api/persons', (req, res) => {
    res.json(persons)
})

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    const person = persons.find(person => person.id === id)
    if (person) {
        res.json(person)
    } else {
        res.status(404).end()
    }

})

app.delete('/api/persons/:id', (req,res) => {
    const id = Number(req.params.id)
    persons = persons.filter(person => person.id !== id)

    res.status(204).end()
})

app.post('/api/persons', (req, res) => {
    const body = req.body
    if (!body.name || !body.number) {
        res.status(400).json({ error: 'fields name, number must be included' })
    } else if (persons.find(person => person.name === body.name)) {
        res.status(400).json({ error: 'name must be unique' })
    } else {
        const newPerson = {...body, id: Math.floor(Math.random() * 1000000)}
        persons = persons.concat(newPerson)
        res.json(newPerson)
    }
})

app.get('/info', (req, res) => {
    res.send(`<div>Phonebook has info for ${persons.length} people</div> 
              </br>
              <div>${new Date()}</div>`)
})
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})