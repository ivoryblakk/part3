require('dotenv').config();
const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

//console.log(require('dotenv').config())

// if ( process.argv.length<3 ) {
//   console.log('give password as argument')
//   process.exit(1)
// }
const url = process.env.MONGODB_URI;

//console.log('connecting to ' , url)

// The password is 1234
//const password = process.argv[2]
// the "test" in the url can be changed to the book you want to save to 
//const url =`mongodb+srv://fullstack:${password}@cluster0-blgdw.mongodb.net/phonebook?retryWrites=true&w=majority`;
//const url = process.env.MONGODB_URI

mongoose.connect(url, { useNewUrlParser: true })
.then(result => {
  console.log('connected to MongoDB')
})
.catch((error) => {
  console.log('error connecting to MongoDB:', error.message)
})
//The code below gets rid of this warning DeprecationWarning: Mongoose: `findOneAndUpdate()` and `findOneAndDelete()` without the `useFindAndModify` option set to false are deprecated.
mongoose.set('useFindAndModify', false);

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    // validate: {
    //   validator: function(v) {
    //     return v.length > 2;
    //   },
    //   message: props => `${props.value} is not a valid name length. Must be more than 2!`
    // },
    minlength: [3,  `The perons name is not a valid name length. Must be more than 2!`],
    required: [true, 'User name required']
  },
  number: {
    type: String,
    validate: {
      validator: function(v) {
        return /\d{4}-\d{4}/.test(v);
      },
      message: props => `${props.value} is not a valid phone number! Must be XXXX-XXXX format and 8 digits`
    },
   // minlength: 9,
    required: [true, 'User phone number required']
  }
})

personSchema.plugin(uniqueValidator);

personSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })
  var error;
//const Contact = mongoose.model('Contact', personSchema)

// if(process.argv.length == 5 ){
//     const contact = new Contact({
//         name: process.argv[3],
//         number: parseInt(process.argv[4]),
//     })

//     contact.save().then(response => {
//     console.log(`added ${process.argv[3]} ${process.argv[4]}`)
//     mongoose.connection.close()
//     })
// }

// if ( process.argv.length == 2 ) {
//     Contact.find({}).then(result => {
//         console.log("phonebook")
//         result.forEach(person => {
    
//           console.log(person)
//         })
//         mongoose.connection.close()
//       })
//   }

  module.exports = mongoose.model('Contact', personSchema)