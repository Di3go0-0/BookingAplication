import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // El tipo de dato es ObjectId
        ref: 'User', // Referencia al modelo 'User'
        required: true, // Este campo es obligatorio
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    bookingTime: {
        type: Date,
        required: true,
        default: Date.now,
    },
    streetAddress: {
        type: String,
        required: true,
        trim: true,
    },
    bookingPrice: {
        type: Number,
        required: true,
    },
},
{
    timestamps: true,
    versionKey: false,
});

export default mongoose.model ("Booking" , bookingSchema)