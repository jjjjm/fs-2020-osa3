require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')

const Person = require('./models/person')

const morgan = require('morgan')
morgan.token('body', (req, res) => {
  if (req.method === 'POST') {
    return JSON.stringify(req.body)
  }
  return ''
})

app.use(cors())
app.use(express.static('build'))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))
app.use(express.json())

app.get('/api/persons', (req, res, next) => {
  Person.find({}).then(persons => {
    res.json(persons)
  })
    .catch(error => next(error))
})

app.get('/api/persons/:id', (req, res, next) => {
  Person.findById(req.params.id)
    .then(person => res.json(person).toJSON())
    .catch(error => next(error))
})

app.delete('/api/persons/:id', (req, res, next) => {
  Person.findByIdAndRemove(req.params.id)
    .then(() => res.status(204).end())
    .catch(error => next(error))
})

app.post('/api/persons', (req, res, next) => {
  const body = req.body
  const newPerson = new Person({ ...body })
  newPerson.save()
    .then(savedPerson => res.json(savedPerson).toJSON())
    .catch(error => next(error))
})

app.put('/api/persons/:id', (req, res, next) => {
  const person = { ...req.body }
  Person.findByIdAndUpdate(req.params.id, person, { new: true })
    .then(updatedPerson => res.json(updatedPerson))
    .catch(error => next(error))
})

app.get('/info', (req, res, next) => {
  Person.find({}).then(persons => {
    res.send(`<div>Phonebook has info for ${persons.length} people</div> </br><div>${new Date()}</div>`)
  })
    .catch(error => next(error))
})



//ERROR MIDDLEWARE
const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

const errorHandler = (error, request, response, next) => {
  console.error(error)
  if (error.name === 'CastError' && error.kind === 'ObjectId') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }
  next(error)
}

// olemattomien osoitteiden käsittely
app.use(unknownEndpoint)

// virheellisten pyyntöjen käsittely
app.use(errorHandler)


const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})