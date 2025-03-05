const mongoose = require('mongoose');

// Define the Notification schema
const notificationSchema = new mongoose.Schema({
    notificationId: {
        type: String,
        required: [true, 'Notification ID is required'],
        unique: true
    },
    title: {
        type: String,
        required: [true, 'Title is required'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        trim: true
    },
    imageUrl: {
        type: String,
        trim: true
    },
    // type: {
    //     type: String,
    //     enum: ['order', 'promotion', 'system', 'other'],
    //     default: 'other'
    // },
    // userId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: false  // Make it required if notifications are user-specific
    // },
    // isRead: {
    //     type: Boolean,
    //     default: false
    // }
}, { timestamps: true });

// Create the Notification model
const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;
