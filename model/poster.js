const mongoose = require('mongoose');

const posterSchema = new mongoose.Schema({
  posterName: {
    type: String,
    required: [true, 'Poster name is required'],
    minlength: 3,
    maxlength: 150
  },
  imageUrl: {
    type: String,
    required: [true, 'Image URL is required'],
    validate: {
      validator: function(v) {
        return /^https?:\/\/.*\.(jpg|jpeg|png|gif|webp)$/i.test(v);
      },
      message: props => `${props.value} is not a valid image URL!`
    }
  },
  // linkUrl: {
  //   type: String,
  //   validate: {
  //     validator: function(v) {
  //       return v ? /^https?:\/\/[^\s]+$/i.test(v) : true;
  //     },
  //     message: props => `${props.value} is not a valid link URL!`
  //   },
  //   default: null
  // },
  // isActive: {
  //   type: Boolean,
  //   default: true
  // },
  // position: {
  //   type: Number,
  //   default: 1,
  //   min: 1
  // }
}, {
  timestamps: true 
});

const Poster = mongoose.model('Poster', posterSchema);

module.exports = Poster;
