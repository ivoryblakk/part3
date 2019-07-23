const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

// create "middleware"
//const logger = morgan('combined')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(morgan(':id :method :status :url :response-time '))
app.use(cors())


morgan.token('id', function getId (req) {
    return JSON.stringify(req.body)
  })

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  }
];
function getRandomInt() {
    return Math.floor(4 +Math.random() * Math.floor(500000));
  }
 app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
  })
 app.get('/api', (req, res) => {
    res.send('<h1>API start!</h1>')
  })  
  app.get('/info', (req, res) => {
    res.send(`This phonebook has ${persons.length} contacts`)
  }) 
  app.get('/api/persons', (request, response) => {
    response.json(persons)
  })
  app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(x => x.id === id)
  
    if (person) {
      response.json(person)
    } else {
      response.status(404).end()
    }
    
  })
  app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(x => x.id !== id)
    
    response.status(204).end()
  })

  app.post('/api/persons/', (request, response) => {
    let person = request.body
    console.log(request.body)
    // logger(request,response, function (err) {
    //     if (err) return done(err)})
    //person = JSON.parse(person)

    if (!person) {
        return response.status(400).json({ 
          error: 'content missing' 
        })
      }
      if (persons.filter(x => x.name === person.name).length === 1) {
        return response.status(400).json({ 
          error: 'Person is in the database' 
        })
      }
      if (!person.name) {
        return response.status(400).json({ 
          error: 'name missing' 
        })
      }
      if (!person.number) {
        return response.status(400).json({ 
          error: 'number missing' 
        })
      }
    person = { name: person.name,
               number: person.number,
               id: getRandomInt()  }
    persons.push(person)
    
    response.json(person)
    //response.json(persons)
  })
const PORT = process.env.POR || 3001
app.listen(port)
console.log(`Server running on port ${PORT}`)
