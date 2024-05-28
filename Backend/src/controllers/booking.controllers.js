import Booking from "../models/booking.models.js"
import User from "../models/user.model.js";

export const getBookings = async (req, res) => {
    try{
        const bookings = await Booking.find({ userId: req.user._id });
        res.json(bookings);
    }catch(err){
        res.status(500).json({error: err.message});
    }
};

export const getBooking = async (req, res) => {
    try {
        const booking = await Booking.findOne({ _id: req.params.id, userId: req.user._id });
        if (!booking) return res.status(404).json({ message: "Booking not found" });
        res.json(booking);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export const createBooking = async (req, res) => {
    try {
        const newBooking = new Booking({
            userId: req.user._id, // obtenemos el ID del usuario de req.user
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            bookingTime: Date.now(), // establecemos bookingTime como la fecha y hora actuales
            streetAddress: req.body.streetAddress,
            bookingPrice: req.body.bookingPrice,
        });

        const savedBooking = await newBooking.save();

        res.json(savedBooking);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export const updateBooking = async (req, res) => {
    try {
        const { firstName, lastName, bookingTime, streetAddress, bookingPrice } = req.body;
        const updatedBooking = await Booking.findOneAndUpdate(
            { _id: req.params.id, userId: req.user._id },
            { firstName, lastName, bookingTime, streetAddress, bookingPrice },
            { new: true }
        );
        if (!updatedBooking) return res.status(404).json({ message: "Booking not found" });
        res.json(updatedBooking);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export const deleteBooking = async (req, res) => {
    try {
        const deletedBooking = await Booking.findOneAndDelete({ _id: req.params.id, userId: req.user._id });
        if (!deletedBooking) return res.status(404).json({ message: "Booking not found" });
        res.json(deletedBooking);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
