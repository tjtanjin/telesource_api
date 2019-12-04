const mongoose = require('mongoose')

const useridSchema = new mongoose.Schema({
  userid: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Userid', useridSchema)
