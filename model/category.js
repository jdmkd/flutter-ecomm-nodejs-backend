const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true, 
        unique: true,
        maxlength: 150
    },
    image: { 
        type: String, 
        required: true, 
        validate: {
            validator: function(v) {
                return /^https?:\/\/.*\.(jpg|jpeg|png|gif|webp)$/.test(v);
            },
            message: props => `${props.value} is not a valid image URL!`
        }
    }
}, { timestamps: true });

module.exports = mongoose.model('Category', categorySchema);
