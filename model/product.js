const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
        maxlength:150
    },
    description: {
        type: String,
        trim: true,
        maxlength: 2000
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    offerPrice: {
        type: Number
    },
    proCategoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    proSubCategoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubCategory',
        required: true
    },
    proBrandId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Brand'
    },
    proVariantTypeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'VariantType'
    },
    proVariantId: [String],
    images: [{
        image: {
            type: Number,
            required: true
        },
        url: {
            type: String,
            required: true,
            validate: {
                validator: function(v) {
                    return /^https?:\/\/.*\.(jpg|jpeg|png|gif|webp)$/.test(v);
                },
                message: props => `${props.value} is not a valid image URL!`
            }
        }
    }]
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
