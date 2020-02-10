const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://fs2020:${password}@cluster0-olys7.mongodb.net/test?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const personSchema = new mongoose.Schema({
  name: String,
  number: String
})


const Person = mongoose.model('Person', personSchema)

if (process.argv.length < 5) {
  Person.find({}).then(persons => {
    console.log('phonebook:')
    persons.forEach(person => console.log(person.name, person.number))
    mongoose.connection.close()
  })
} else {
  const person = new Person({
    name: process.argv[3],
    number: process.argv[4]
  })
  person.save().then(() => {
    console.log('added', person.name, 'number', person.name, 'to phonebook')
    mongoose.connection.close()
  })
}




