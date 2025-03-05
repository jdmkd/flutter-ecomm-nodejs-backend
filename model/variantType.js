const mongoose = require('mongoose');

// Define the Variant schema
const variantTypeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'], 
        trim: true,
        maxlength: 150
    },
    type: {
        type: String,
        required: [true, 'Type is required'],
        trim: true,
        maxlength: 150
    }
},{ timestamps: true });

// Create the Variant model
const VariantType = mongoose.model('VariantType', variantTypeSchema);

module.exports = VariantType;
