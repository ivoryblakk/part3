
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const Contact = require('./models/mongo');
const mongoose = require('mongoose');



app.use(bodyParser.json());
//app.use(bodyParser.urlencoded());
//app.use(morgan(':id :method :status :url :response-time '));
app.use(cors());


// morgan.token('id', function getId(req) {
//   return JSON.stringify(req.body);
// })
// app.use((err,req,res,next) => {
//   if (error.name === 'ValidationError') {
//   console.log("new error handler", err)
//   }
// });


app.use(express.static('build'))

app.get('/api', (req, res) => {
  res.send('<h1>API start!</h1>');
})

app.get('/info', (req, res) => {
  Contact.find({}).then(result => {
   // console.log( "search amount of people in phonebook", {result})
    res.send(`This phonebook has ${result.length} contacts`)
  }).catch(error => next(error))
})

app.get('/api/persons', (request, response) => {
  Contact.find({}).then(result => {
    response.json(result)
   // mongoose.connection.close()
  }).catch(error => next(error))
})

app.get('/api/persons/:id', (request, response) => {
  const id = request.params.id
  console.log("id", id)
  Contact.findById(id).then(result => {
    if (result) {
      console.log("result", result)
      response.json(result)
    } else {
      response.status(404).end()
    }
  }).catch(error => console.log(error))

})

app.delete('/api/persons/:id', (request, response) => {
  const id = request.params.id
  Contact.findByIdAndRemove(id)
    .then(result => {
      response.status(204).end()
    })
})



app.put('/api/persons/:id', (request, response) => {
  const body = request.body
  const id = request.params.id
  console.log("body post update ", body)

 Contact.findByIdAndUpdate( id, body,  { new: true })
 .then(updatedExistingPerson => {
  response.json(updatedExistingPerson.toJSON())})
 .catch(error => next(error))
  })




app.post('/api/persons/', (request, response, next) => {
  let person = request.body
  if (person === undefined) {
    return response.status(400).json({ error: 'Person content missing' })
  }

  const contact = new Contact({
    name: person.name,
    number: person.number
  })
 
  contact
  .save()
  .then( res => {
    console.log("Yeah it worked!")
    response.json(res.data)
  })
  .catch(err => {
    console.log("sending err to font end ", err.message)
    //console.log("sending err to font end ", err.toJSON())
    //next(err)
    return response.send({ error: err.message})
  })
})



const errorHandler = (error, request, response, next) => {
 console.error("response =", response)
  // if(response.status > 200){
  //   next(error)
  //  return response.status(400).send({ error: error.message })
  // }

  if (error.name === 'CastError' && error.kind == 'ObjectId') {
    return response.status(400).send({ error: 'malformatted id' })
  }  else if (error.name === 'ValidationError') {
    //console.log("errorHandler ", error.name)
    //next(error)
   return response.status(400).send({ error: error.name })
  }

 // next(error)
}

app.use(errorHandler)

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

// handler of requests with unknown endpoint
app.use(unknownEndpoint)



const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running `)
})

//mongodb+srv://fullstack:<password>@cluster0-blgdw.mongodb.net/test?retryWrites=true&w=majority



// app.post('/api/persons/', (request, response) => {
//   let person = request.body
//   console.log(request.body)
//   // logger(request,response, function (err) {
//   //     if (err) return done(err)})
//   //person = JSON.parse(person)

//   // if (!person) {
//   //   return response.status(400).json({
//   //     error: 'content missing'
//   //   })
//   // }
//   // // if (persons.filter(x => x.name === person.name).length === 1) {
//   // //   return response.status(400).json({ 
//   // //     error: 'Person is in the database' 
//   // //   })
//   // //}
//   // if (!person.name) {
//   //   return response.status(400).json({
//   //     error: 'name missing'
//   //   })
//   // }
//   // if (!person.number) {
//   //   return response.status(400).json({
//   //     error: 'number missing'
//   //   })
//   // }
//    // person = { name: person.name,
//   //            number: person.number,
//   //            id: getRandomInt()  }
//   // persons.push(person)
  
//   const contact = new Contact({
//     name: person.name,
//     number: parseInt(person.number),
//   })
 
//   contact.save().then(response => {
//     console.log(`added ${person.name} ${person.number}`)
//     debugger
//     mongoose.connection.close()
//   })
//   response.json(person)
//   //response.json(persons)
// })

// let persons = [
//   {
//     id: 1,
//     name: "Arto Hellas",
//     number: "040-123456",
//   },
//   {
//     id: 2,
//     name: "Ada Lovelace",
//     number: "39-44-5323523",
//   },
//   {
//     id: 3,
//     name: "Dan Abramov",
//     number: "12-43-234345",
//   }
// ];
//  app.get('/', (req, res) => {
//     res.send('<h1>Hello World!</h1>')
//   }) had to removes this call becuase the middleware 'build' would not work
//const Contact = mongoose.model('Contact', contactSchema)
// create "middleware"
//const logger = morgan('combined')
// express static build get the build folder from the directory and bulds the website
//mongoose.connect(url, { useNewUrlParser: true })
//const url =`mongodb+srv://fullstack:${password}@cluster0-blgdw.mongodb.net/phonebook?retryWrites=true&w=majority`;

// function getRandomInt() {
//   return Math.floor(4 + Math.random() * Math.floor(500000));
// }