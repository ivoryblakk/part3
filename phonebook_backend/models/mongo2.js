const mongoose = require('mongoose')

if ( process.argv.length<3 ) {
  console.log('give password as argument')
  process.exit(1)
}


// The password is 1234
const password = process.argv[2]
// the "test" in the url can be changed to the book you want to save to 
const url =`mongodb+srv://fullstack:${password}@cluster0-blgdw.mongodb.net/phonebook?retryWrites=true&w=majority`;


mongoose.connect(url, { useNewUrlParser: true })

const contactSchema = new mongoose.Schema({
  name: String,
  number: Number
})

contactSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })

const Contact = mongoose.model('Contact', contactSchema)

if(process.argv.length == 5 ){
    const contact = new Contact({
        name: process.argv[3],
        number: parseInt(process.argv[4]),
    })

    contact.save().then(response => {
    console.log(`added ${process.argv[3]} ${process.argv[4]}`)
    mongoose.connection.close()
    })
}

if ( process.argv.length == 3 ) {
    Contact.find({}).then(result => {
        console.log("phonebook")
        result.forEach(person => {
    
          console.log(person)
        })
        mongoose.connection.close()
      })
  }
