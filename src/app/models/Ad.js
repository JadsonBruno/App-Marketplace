const mongosse = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const Ad = new mongosse.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  author: {
    type: mongosse.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})
Ad.plugin(mongoosePaginate)

module.exports = mongosse.model('Ad', Ad)
